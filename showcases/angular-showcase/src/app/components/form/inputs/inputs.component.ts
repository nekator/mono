import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBInput } from '../../../../../../../output/angular/src';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule],
	templateUrl: './inputs.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
}
