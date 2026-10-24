import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: `
  //   <section class="title">hola</section>
  // `,

  // styles: [`
  //   .title {
  //     color: blue;
  //   }
  // `]
})
export class AppComponent {
  title = 'DesarrolloWeb_II_App';
}
