import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/taras';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    }
    // agregar el objeto tarea al array
    this.listaTareas.push(tarea);

    // reset form o input
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listaTareas[index].estado = !tarea.estado;
  }
}
