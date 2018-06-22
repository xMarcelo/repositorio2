import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        children: [
          { path: 'dashboard', component: HomeComponent, data: { titulo: ''}  },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
      }
];

export const PAGES_ROUTING = RouterModule.forChild( pagesRoutes );
