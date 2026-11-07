import { Injectable, effect, signal } from '@angular/core';
import { Character } from '../interfaces/Character.interface';

const loadFromlocalStorage = () : Character[] => {
  const characters = localStorage.getItem('Personajes');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({
  providedIn: 'root'
})
export class VariosService {
  characters = signal<Character[]>(loadFromlocalStorage());

  saveToLocalStorage = effect(() =>{
    console.log('Conteo de personajes ', this.characters().length);
    localStorage.setItem('Personajes', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character){
    this.characters.update((list) => [...list, character]);
  }
  constructor() { }
}
