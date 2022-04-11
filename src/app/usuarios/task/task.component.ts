import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  datos = [
    {nombre: '5'},
    {nombre: '6'},
    {nombre: '7'},
    {nombre: '8'},
  ]
  nombres = [
    {nombre: '1'},
    {nombre: '2'},
    {nombre: '3'},
    {nombre: '4'},
  ]

  fechas = [
    {nombre: '9'},
    {nombre: '10'},
    {nombre: '11'},
    {nombre: '12'},
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

  logout(): void {
    window.localStorage.removeItem('user');
    // console.log('HOLA');
    window.location.href = '/login';
  }

}
