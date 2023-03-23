import { Component, OnInit } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/tag';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html'
})
export class TagComponent implements OnInit {
	variants = defaultComponentVariants;

	ngOnInit() {
		for (const variant of defaultComponentVariants) {
			variant.examples[0].code = '<DBTag>Button</DBTag>';
		}
	}
}
