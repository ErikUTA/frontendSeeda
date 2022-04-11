import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  usuarios: any;
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
  
  constructor(private service: AuthService) {
  }
  
  ngOnInit(): void {
    var url = window.location.pathname.slice(13, 14);
    if(url){
      var number = Number.parseInt(url);
      this.service.projectsUser(number).subscribe((data:any) => {
        this.usuarios = data;
        console.log(data);
      });
    }
    console.log();
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

  homeworks(param:any): void {    
    window.location.href = `/auth/task/${param}/${window.location.pathname.slice(13, 14)}`
  }

  logout(): void {
    window.localStorage.removeItem('user');
    // console.log('HOLA');
    window.location.href = '/login';
  }

}
