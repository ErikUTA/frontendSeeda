import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  view: any = [600, 300];
  single: any = [];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';


//////////////////INFO//////////////////
  infoProjects: any = []; 



  colorScheme: any = {
    domain: ['#2196f3', '#6eb8f5', '#9acef8', '#AAAAAA']
  };

  constructor(public service: AuthService) {
    Object.assign(this, this.single);
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
    tareas:any;
    proyectos:any;
  ngOnInit(){
    this.service.proyects().subscribe((data:any) => {
      this.infoProjects = data;      
    });
    this.service.taskCount().subscribe((data:any) => {
      this.tareas = data.count;      
    });
    this.service.projectsCount().subscribe((data:any) => {
      this.proyectos = data.count;      
    });
    this.single = [
      {
        "name": "Tareas",
        "value": this.tareas ? this.tareas : 2
      },
      {
        "name": "Proyectos",
        "value": this.proyectos ? this.tareas : 3
      }
    ];
  }
  

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
