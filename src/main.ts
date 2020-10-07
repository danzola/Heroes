import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ImplicitAuthenticationService } from './app/implicit-authentication.service';


if (environment.production) {
  enableProdMode();
}

const autenticacion= new ImplicitAuthenticationService;
const isButtonLogin=false;

if(!autenticacion.getAuthorizationUrl(isButtonLogin)){}
else{
  autenticacion.live();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
