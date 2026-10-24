import { Component, output, signal } from '@angular/core';
import {Character} from '../../interfaces/Character.interface';

@Component({
  selector: 'app-character-form',
  imports: [],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css',
})
export class CharacterFormComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();
  
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power(),
    };
    // this.characters().push(newCharacter);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
