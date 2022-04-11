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
  all:any = [];
  finalizadas: any = [];
  description: any;
  idTask:any;
  one:any;
  two:any;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    var listaNombres = window.location.pathname.slice(11, 20).split('/');
    this.one = listaNombres[0].length === 2 ? Number.parseInt(window.location.pathname.slice(11,13)) : Number.parseInt(window.location.pathname.slice(11,12));
    this.two = listaNombres[0].length === 2 && listaNombres[1].length === 2 ? Number.parseInt(window.location.pathname.slice(14,16)) : listaNombres[0].length === 1 && listaNombres[0].length === 1 ? Number.parseInt(window.location.pathname.slice(13, 15)) : listaNombres[0].length === 1 && listaNombres[1].length === 2 ? Number.parseInt(window.location.pathname.slice(13, 15)) : listaNombres[0].length === 2 && listaNombres[1].length === 1 ? Number.parseInt(window.location.pathname.slice(14, 15)):null;
    console.log(this.one, this.two);
    this.service.getTask().subscribe((data: any) => {
      console.log(data);
      if(data){
        for(let i=0; i<data.length; i++){
          if(data[i].user_id === this.one && data[i].project_id === this.two){
            if(data[i].status === true){
              this.tareas.push(data[i]);
            }else{
              this.finalizadas.push(data[i]);
            }
            this.all.push(data);
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
        user_id: this.one,
        project_id: this.two
    }
    console.log(array);
    this.service.addTask(array);
    window.location.reload();
  }

  onSubmit(task_name:any, description: any, id:any):void {
    
    var array:any = {
        status: false,
        task_name: task_name,
        description: description,
        user_id: this.one,
        project_id: this.two
    }
    this.service.alterTask(array, id);
    window.location.reload();
  }

  regresar(task_name:any, description: any, id:any):void {
    
    var array:any = {
        status: true,
        task_name: task_name,
        description: description,
        user_id: this.one,
        project_id: this.two
    }
    this.service.alterTask(array, id);
    window.location.reload();
  }

  info(text:any){
    this.description = text;
  }

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
