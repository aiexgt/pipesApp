import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre: string = "Alexander";
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['Maria','Juan','Pedro','Jorge','Carlos','Pepe'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino'
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Alexander',
    edad: 22,
    direccion: 'Guatemala, Guatemala'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]

  //Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500)
  } );
}
