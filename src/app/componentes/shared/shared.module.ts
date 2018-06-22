import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { PanelLateralComponent } from './panel-lateral.component';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { TollbarComponent } from './tollbar.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';


@NgModule({
    declarations: [
        PanelLateralComponent,
        BreadcrumbsComponent,
        TollbarComponent,
        ModalPopupComponent
    ],
    exports: [
        PanelLateralComponent,
        BreadcrumbsComponent,
        TollbarComponent,
        ModalPopupComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule { }
