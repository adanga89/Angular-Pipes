import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el idioma local de la app
import localES from '@angular/common/locales/es-MX';
import localFR from '@angular/common/locales/fr';
import localDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFR);
registerLocaleData(localDE);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentasModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
