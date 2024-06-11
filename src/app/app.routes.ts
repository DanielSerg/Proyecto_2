import { Routes, RouterModule} from '@angular/router';

import { InicioComponent } from './auth/inicio/inicio.component';
import { DigitalComponent } from './auth/digital/digital.component';
import { ContactoComponent } from './auth/contacto/contacto.component';
import { FooterComponent } from './auth/footer/footer.component';
import { ClaseComponent } from './auth/clase/clase.component';

export const routes: Routes = [
    
    { 
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'clase',
        component: ClaseComponent
    },
    {
        path: 'digital',
        component: DigitalComponent
    },
    {
        path:'contacto',
        component: ContactoComponent
    },
    { 
        path:'footer',
        component: FooterComponent
    },
    { 
        path:'**',
        redirectTo: '/inicio'
    }
];
