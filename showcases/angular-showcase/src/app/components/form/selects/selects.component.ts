import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBSelect } from '../../../../../../../output/angular/src';

@Component({
	selector: 'app-selects',
	standalone: true,
	imports: [WrapperComponent, DBSelect, FormsModule, ReactiveFormsModule],
	templateUrl: './selects.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectsComponent {
	plain = 'combobox-2';
	ngModel = 'combobox-2';
	formControl: FormControl = new FormControl('combobox-2');
}
