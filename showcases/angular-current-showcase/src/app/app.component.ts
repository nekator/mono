import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular-current-showcase';

	tabs = [
		{
			name: 'tab-bar-2',
			label: '2-Tab1',
			active: true,
			children: 'Content 2-1'
		},
		{ name: 'tab-bar-2', label: '2-Tab2', content: 'Content 2-2' }
	];

	formData = {
		username: 'Test',
		password: '1234'
	};

	onClick() {
		console.log('click event');
	}

	onSubmitForm(event: any): void {
		event.preventDefault();

		console.log('on submit Form', this.formData);
	}
}
