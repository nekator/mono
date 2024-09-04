import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DBLink, DBNotification } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/notification.json';
import { DefaultComponent } from '../default.component';
import { environment } from "../../../environments/environment";

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	imports:  environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBNotification, DBLink],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	standalone: true
})
export class NotificationComponent {
	variants = defaultComponentVariants;

	showNotification = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
