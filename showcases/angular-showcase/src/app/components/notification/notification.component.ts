import { Component } from '@angular/core';
import { DBLink, DBNotification } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/notification.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	imports: [DefaultComponent, DBNotification, DBLink],
	standalone: true
})
export class NotificationComponent {
	variants = defaultComponentVariants;

	showNotification = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
