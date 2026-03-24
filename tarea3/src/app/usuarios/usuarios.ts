import { Component, OnInit } from '@angular/core';

interface usuario{
  nombre: String;
  edad: number;
  estado:Boolean;

}

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: usuario[]=[];

  nuevoNombre: String = '';
  nuevaEdad: number = 0;

  mostrarLista:boolean = true;

  constructor () {
    console.log('Constructor ejecutado');
  }

}
