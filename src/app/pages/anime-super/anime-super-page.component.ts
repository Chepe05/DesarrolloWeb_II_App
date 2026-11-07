import { Component, inject, signal } from '@angular/core';
import { CharacterFormComponent } from '../../components/character-form/character-form.component';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { VariosService } from '../../services/varios.service';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-anime-super--page',
  imports: [CharacterFormComponent, CharacterListComponent],
  templateUrl: './anime-super-page.component.html',
  styleUrl: './anime-super-page.component.css',
})
export class AnimeSuperPageComponent {
  // name= signal('');
  // power=signal(0);

  // characters = signal<Character[]>([
  // {id:1, name:'Goku', power:9001},
  // {id:2, name:'Goku', power:9001},
  // {id:3, name:'Goku', power:9001},
  // {id:4, name:'Goku', power:9001}
  // ]);

  // addCharacter(){
  //   if(!this.name() || !this.power() || this.power() <= 0){
  //     return;
  //   }

  //   const newCharacter: Character = {
  //     id: this.characters().length + 1,
  //     name:this.name(),
  //     power:this.power()
  //   }
  //   this.characters().push(newCharacter);
  //   this.resetFields();
  // }

  // resetFields(){
  //   this.name.set('');
  //   this.power.set(0);
  // }

  //Inyeccion de un servicio de manera tradicional
  /*constructor(
public variosService: VariosService
){}
*/

  //Inyeccion de un servicio de manera moderna y funcional
  public variosService = inject(VariosService);
}
