import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import defaultComponentVariants from '../../../../../shared/radio.json';
import { DefaultComponent } from '../default.component';
import { DBRadio } from '../../../../../../output/angular/src';
import { environment } from "../../../environments/environment";

@Component({
	selector: 'app-radio',
	templateUrl: './radio.component.html',
	imports:  environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBRadio],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	standalone: true
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
