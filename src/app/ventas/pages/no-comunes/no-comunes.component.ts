import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Adan';
  genero: string = 'M';

  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'invitarla',
    //other
  }

  cambiarCliente(){
    if(this.genero === "M"){
      this.nombre = "Danlin";
      this.genero = 'F'
    }else{
      this.nombre = "Adan";
      this.genero = 'M'
    }
  }

  //i18nPlurarl
  clientes: string[] =['1', 'dos', '3','4'];
  clientesMapa = {
    '=0': 'NO tenemos Clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente(){
    this.clientes.pop();
    console.log(this.clientes);
  }

  //KeyValue Pipe
  persona = {
    nombre:'Adan',
    edad: 33,
    direccion: 'CDMX'
  }

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 1000);
  });
}
