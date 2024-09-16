import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBCheckbox, DBInput } from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-checkboxes',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, DBCheckbox, FormsModule, ReactiveFormsModule] // TODO: Remove DBCheckbox after stencil component works
		: [WrapperComponent, DBCheckbox, FormsModule, ReactiveFormsModule],
	templateUrl: './checkboxes.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);
}
