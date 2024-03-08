import { Component } from '@angular/core';
import { DBInput } from '@db-ui/ngx-components/src';
import defaultComponentVariants from '../../../../../shared/select.json';
import { DefaultComponent } from '../default.component';
import { DBSelect } from '../../../../../../output/angular/src/components/select/select';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	imports: [DefaultComponent, DBSelect, DBInput],
	standalone: true
})
export class SelectComponent {
	variants = defaultComponentVariants;
}
