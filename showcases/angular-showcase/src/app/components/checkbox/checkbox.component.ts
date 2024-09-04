import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DBCheckbox } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/checkbox.json';
import { DefaultComponent } from '../default.component';
import { environment } from "../../../environments/environment";

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	imports:  environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBCheckbox],
	standalone: true,
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class CheckboxComponent {
	variants = defaultComponentVariants;
}
