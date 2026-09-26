import { Component,signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterPageComponent {
    contador = 10;
    contadorSignal = signal(5);

    operationButton(value:number){
        if(value != 0){
            this.contador += value;
            this.contadorSignal.set(this.contadorSignal()+value);
        }
        else{
            this.contador = 10;
            this.contadorSignal.set(5);
        }
    }

}