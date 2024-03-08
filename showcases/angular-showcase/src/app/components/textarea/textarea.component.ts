import { Component } from '@angular/core';
import { DBInput } from '@db-ui/ngx-components/src';
import defaultComponentVariants from '../../../../../shared/textarea.json';
import { DefaultComponent } from '../default.component';
import { DBTextarea } from '../../../../../../output/angular/src/components/textarea/textarea';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	imports: [DefaultComponent, DBTextarea, DBInput],
	standalone: true
})
export class TextareaComponent {
	variants = defaultComponentVariants;
}
