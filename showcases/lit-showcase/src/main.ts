import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { isDevMode } from '@angular/core';
import { Sa11y, Lang } from 'sa11y/dist/js/sa11y.esm.js';
import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';
import { AppComponent } from '../../angular-showcase/src/app/app.component';
import { getRoutes } from '../../angular-showcase/src/app/utils/navigation-item';
/*import '../../../output/lit/src/index';*/
import '../../../output/lit/src/components/card/card';
import '../../../output/lit/src/components/divider';
import '../../../output/lit/src/components/infotext';
import '../../../output/lit/src/components/button';
import '../../../output/lit/src/components/section';
import '../../../output/lit/src/components/link';
import '../../../output/lit/src/components/checkbox';
import '../../../output/lit/src/components/textarea'; /*
import '../../../output/lit/src/components/input';*/

import '../../../output/lit/src/components/popover';
import '../../../output/lit/src/components/drawer';

if (isDevMode()) {
	Lang.addI18n(Sa11yLangEn.strings);
	const sa11y = new Sa11y({
		checkRoot: 'body'
	});
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrapApplication(AppComponent, {
	providers: [provideRouter(getRoutes(), withHashLocation())]
});
