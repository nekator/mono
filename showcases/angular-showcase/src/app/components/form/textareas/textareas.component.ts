import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBTextarea } from '../../../../../../../output/angular/src';

@Component({
	selector: 'app-textareas',
	standalone: true,
	imports: [WrapperComponent, DBTextarea, FormsModule, ReactiveFormsModule],
	templateUrl: './textareas.component.html',
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class TextareasComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
}
