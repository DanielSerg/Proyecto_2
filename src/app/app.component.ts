import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule } from '@angular/router';
import { InicioComponent } from './auth/inicio/inicio.component';
import { DigitalComponent } from './auth/digital/digital.component';
import { FooterComponent } from './auth/footer/footer.component';
import { ContactoComponent } from './auth/contacto/contacto.component';
import { ClaseComponent } from './auth/clase/clase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,InicioComponent,ClaseComponent,DigitalComponent,ContactoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'defensa_2';
}
