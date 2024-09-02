import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/popover.json';
import { DefaultComponent } from '../default.component';
import { DBButton, DBPopover } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.component.html',
	imports: [DefaultComponent, DBPopover, DBButton],
	standalone: true
})
export class PopoverComponent {
	variants = defaultComponentVariants;
}
