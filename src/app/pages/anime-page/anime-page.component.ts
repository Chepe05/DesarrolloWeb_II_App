import { Component, signal } from '@angular/core';
import {Character} from '../../interfaces/Character.interface';

@Component({
  selector: 'app-anime-page',
  imports: [],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.css',
})
export class AnimePageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegetta', power: 8900 },
    { id: 3, name: 'Krilin', power: 400 },
    { id: 4, name: 'Yamcha', power: 100 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters().push(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
