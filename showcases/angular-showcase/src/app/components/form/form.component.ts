import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
	array = ['X', 'Y', 'Z'];
	radio = '';
	input = '';
	tags: string[] = [];

	select = '';
	checkbox = '';
	model = { input: 'Anna', radio: 'X', checkbox: false };
	dataList = [{ key: 'test', value: 'Test' }, { key: 'test2' }];

	// Reference: https://blog.angular-university.io/angular-custom-form-controls/
	form = new FormGroup({
		input: new FormControl('Filled with formControl')
	});

	getRadioName = (radioName: string): string => `Radio ${radioName}`;

	getTagName = (tag: string): string => `Tag ${tag}`;

	getTags = (): string => JSON.stringify(this.tags);

	changeTags = (tag: string) => {
		this.tags = this.tags.includes(tag)
			? this.tags.filter((t) => t !== tag)
			: [...this.tags, tag];
	};

	resetValues(): void {
		this.model.input = 'reset';
		this.form.get('input')?.setValue('reset');
	}

	onFormSubmit(): void {
		// eslint-disable-next-line no-alert
		alert(
			'Formvalue: ' +
				JSON.stringify(this.form.value) +
				' / Model data: ' +
				JSON.stringify(this.model)
		);
	}

	showValues(): void {
		// eslint-disable-next-line no-alert
		alert(
			JSON.stringify({
				input: this.input,
				radio: this.radio,
				select: this.select,
				checkbox: this.checkbox,
				tags: this.tags
			})
		);
	}
}
