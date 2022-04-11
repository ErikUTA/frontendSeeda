import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  integrantes: any = [
    { usuario: 'Erik', color: 'gray' },
    { usuario: 'Leo', color: 'blue' },
    { usuario: 'Mama', color: 'green' },
  ]
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
    for(let i=0; i < this.integrantes.length; i++){
      var user = document.getElementById('avatar');
      var element = document.createElement('div');
      element.innerHTML = `<div class="ms-4 me-4 center-a text-white p-2" style="background: ${this.integrantes[i].color}; width: 50px; height: 50px; border-radius: 50%;">${this.integrantes[i].usuario}</div>`;
      user?.appendChild(element);
    }
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
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

}
