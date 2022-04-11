import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  view: any = [600, 300];
  // single: any = [];
  usuarios: any = [];
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
    // Object.assign(this, this.single);
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
  tareas:any = 0;
  proyectos:any = 0;
  single:any = [];
  ngOnInit(){
    this.service.getUsers().subscribe((data:any) => {
      this.usuarios = data;
    });
    this.service.proyects().subscribe((data:any) => {
      this.infoProjects = data;      
    });
    this.service.taskCount().subscribe((data:any) => {
      this.single.push({name: "Tareas", value: data.count});
    });
    this.service.projectsCount().subscribe((data:any) => {
      this.single.push({name: "Proyectos", value: data.count});
    }); 
  }
  
  
  
  
  project(param:any): void {
    window.location.href = `/auth/listas/${param}`;
  }

  onAdd(frm:any):void {
    var array:any = {
        project_name: frm.value.project_name,
        description: frm.value.description,
        leader_project: frm.value.leader_project,
        user_id: Number.parseInt(frm.value.user_id),
        projects: 0,
        
    }
    console.log(array);
    this.service.addProject(array);
    window.location.reload();
  }

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
