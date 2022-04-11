import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
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
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
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
