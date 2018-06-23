import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ElaborarCartaComponent } from './elaborar-carta/elaborar-carta.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        children: [
          { path: 'dashboard', component: HomeComponent, data: { titulo: ''}  },
          { path: 'elaborar-carta', component: ElaborarCartaComponent, data: { titulo: 'Elaborar Carta'}  },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }
];

export const PAGES_ROUTING = RouterModule.forChild( pagesRoutes );
