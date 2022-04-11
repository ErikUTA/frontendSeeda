import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tareas:any = [];
  description: any;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: any) => {
      console.log(data);
      if(data){
        for(let i=0; i<data.length; i++){
          if(data[i].user_id === Number.parseInt(window.location.pathname.slice(11,12))){
            this.tareas.push(data[i]);
          }
        }
      }
    });
  }


  datos = [
    {nombre: '5'},
    {nombre: '6'},
    {nombre: '7'},
  ]
  nombres = [
    {status: true, task_name: 'Tarea de ejemplo', description: 'Ejemplo', user_id: 0, project_id: 0},
  ]
  
  fechas = [
    {status: true, task_name: 'Tarea de ejemplo', description: 'Ejemplo', user_id: 0, project_id: 0},
  ]
  
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onAdd(frm:any):void {
    var array:any = {
        status: true,
        task_name: frm.value.task_name,
        description: frm.value.description,
        user_id: Number.parseInt(window.location.pathname.slice(11,12)),
        project_id: Number.parseInt(window.location.pathname.slice(13, 14))
    }
    console.log(array);
    this.service.addTask(array);
    window.location.reload();
  }

  info(text:any){
    this.description = text;
  }

  logout(): void {
    window.localStorage.removeItem('user');
    // console.log('HOLA');
    window.location.href = '/login';
  }

}
