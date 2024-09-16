import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/select.json';
import { DefaultComponent } from '../default.component';
import { DBSelect } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	imports: environment.webComponents
		? [DefaultComponent, DBSelect] // TODO: Remove DBSelect after stencil component works
		: [DefaultComponent, DBSelect],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class SelectComponent {
	variants = defaultComponentVariants;
}
