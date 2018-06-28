import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './componentes/pages/pages.module';

// components
import { PagesComponent } from './componentes/pages/pages.component';
import { AppComponent } from './app.component';

// rutas
import { APP_ROUTING } from './app.routes';








@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
