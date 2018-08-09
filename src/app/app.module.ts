import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTER } from './app.routes';

// modulos
import { PageModules } from './page/page.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PageModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
