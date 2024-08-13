import { Component } from '@angular/core';

import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/multi-select.json';
import { DBMultiSelect } from '../../../../../../output/angular/src/components/multi-select';

@Component({
	selector: 'app-multi-select',
	templateUrl: './multi-select.component.html',
	imports: [DefaultComponent, DBMultiSelect],
	standalone: true
})
export class MultiSelectComponent {
	variants = defaultComponentVariants;
}


