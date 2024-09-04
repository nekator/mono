import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBCheckbox } from '../../../../../../../output/angular/src';

@Component({
	selector: 'app-checkboxes',
	standalone: true,
	imports: [WrapperComponent, DBCheckbox, FormsModule, ReactiveFormsModule],
	templateUrl: './checkboxes.component.html',
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class CheckboxesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);
}
