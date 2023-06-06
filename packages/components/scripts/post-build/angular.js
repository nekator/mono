const Replace = require('replace-in-file');
const { components } = require('./components');
const { runReplacements } = require('../utils');

const changeFile = (component, input) => {
	let isFormComponent = false;

	/// add imports
	if (component.config && component.config.angular) {
		if (component.config.angular.controlValueAccessor) {
			isFormComponent = true;
			input =
				"import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\n" +
				"import { Renderer2 } from '@angular/core';\n" +
				input;
		}
	}

	return input
		.split('\n')
		.filter(
			(line) =>
				!line.includes('@db-ui') &&
				!line.includes(`Props } from "../`) &&
				!line.includes(`[key]=`)
		)
		.map((line) => {
			if (
				line.includes(`import { DB`) &&
				line.includes(`../`) &&
				!line.includes(`Module`)
			) {
				return line.replace(` } from "../`, `Module } from "../`);
			}

			if (line.includes(': ElementRef')) {
				return line.replace(': ElementRef', ': ElementRef | undefined');
			}

			if (line.includes('.nativeElement') && !line.includes('=')) {
				return line.replace('.nativeElement', '?.nativeElement');
			}

			// for native angular support (e.g. reactive forms) we have to implement
			// the ControlValueAccessor interface with all impacts :/
			if (isFormComponent) {
				// inserting provider
				if (line.includes('@Component({')) {
					return `@Component({
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: DB${
			component.name.charAt(0).toUpperCase() + component.name.slice(1)
		},
		multi: true
	}],	`;
				}
				// implementing interface and constructor
				if (
					line.includes('export class') &&
					line.toLowerCase().includes(` db${component.name} `)
				) {
					return line.replace(
						'{',
						`implements ControlValueAccessor {
    constructor(private renderer: Renderer2) { }`
					);
				}

				// insert custom interface functions before ngOnInit
				// TODO update attribute by config if necessary (e.g. for checked attribute?)
				if (line.includes('ngOnInit()')) {
					return `
   writeValue(value: unknown) {
     this.value = value;

	 if (this.component?.nativeElement) {
		this.renderer.setProperty(this.component?.nativeElement, 'value', value);
	 }
   }

   registerOnChange(onChange: any) {
     this.propagateChange = onChange;
   }

   registerOnTouched(onTouched: any) {
    //this.onTouched = onTouched;
   }

   setDisabledState(disabled: boolean) {
     this.disabled = disabled;
   }

   ngOnInit() { `;
				}
			}

			return line;
		})
		.join('\n');
};

module.exports = (tmp) => {
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${
			tmp ? 'output/tmp' : 'output'
		}/angular/src/components/${componentName}/${componentName}.ts`;
		const options = {
			files: file,
			processor: (input) => changeFile(component, input)
		};

		try {
			Replace.sync(options);
			runReplacements([], component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
