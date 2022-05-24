import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'adan garnica a.';

  mostrarNombre(){
    console.log(this.nombre);
  }

  constructor(private primeNgConfig: PrimeNGConfig){}
  
  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
