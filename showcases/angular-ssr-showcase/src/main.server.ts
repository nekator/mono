import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../../angular-showcase/src/app/app.component';
import { config } from './app/app.config.server';

const bootstrap = async () => bootstrapApplication(AppComponent, config);

export default bootstrap;
