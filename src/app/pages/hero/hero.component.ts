import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescripcion() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(60);
  }

  ResetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
