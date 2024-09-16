import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBInput, DBSelect } from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule] // TODO: Remove DBInput after stencil component works
		: [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule],
	templateUrl: './inputs.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
}
