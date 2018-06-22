import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// rutas
import { PAGES_ROUTING } from './pages.routes';

// modulos
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        NopagefoundComponent,
        LoginComponent
    ],
    exports: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        CommonModule,
        PAGES_ROUTING
    ]
})

export class PagesModule { }
