import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
	radioNames = ['X', 'Y', 'Z'];
	radio = '';
	input = '';

	select = '';
	checkbox = '';
	model = { input: 'Anna', radio: 'X', checkbox: false };
	dataList = [{ key: 'test', value: 'Test' }, { key: 'test2' }];

	// Reference: https://blog.angular-university.io/angular-custom-form-controls/
	form = new FormGroup({
		input: new FormControl('Filled with formControl')
	});

	getRadioName = (radioName: string): string => `Radio ${radioName}`;

	resetValues(): void {
		this.form.get('input')?.setValue('reset');
	}

	onFormSubmit(): void {
		// eslint-disable-next-line no-alert
		alert(JSON.stringify(this.form.value));
	}
}
