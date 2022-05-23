import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'adan';
  nombreUpper: string = 'ADAN';
  nombreCompleto: string = 'aDAn gArNiCA';

  fecha: Date = new Date(); //dia de Hoy
  
}
