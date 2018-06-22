import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/pages/login/login.component';
import { NopagefoundComponent } from './componentes/pages/nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NopagefoundComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true} );
