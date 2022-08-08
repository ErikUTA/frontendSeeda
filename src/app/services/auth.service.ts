import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'https://still-citadel-42322.herokuapp.com';
  private authSubject: BehaviorSubject<any>;
  local:any = localStorage.getItem('user');
  dataProjects: any;


  constructor(private httpClient: HttpClient, private router: Router) {
    this.authSubject = new BehaviorSubject<User>(JSON.parse(this.local));
  }

  login(datos: User) {
    this.httpClient.post(`${this.AUTH_SERVER}/login`, datos).subscribe(data => {
      this.router.navigateByUrl("/auth/loading");
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    }, error => {
      window.alert("Datos incorrectos o campos vacios")
    });
  }

  public proyects(): any {
    return this.httpClient.get<any>(`${this.AUTH_SERVER}/projects`);
  }

  public taskCount(): any {
    return this.httpClient.get<any>(`${this.AUTH_SERVER}/tasks/count`);
  }
  public projectsCount(): any {
    return this.httpClient.get<any>(`${this.AUTH_SERVER}/projects/count`);
  }

  public projectsUser(param:any): any {
    return this.httpClient.get<any>(`${this.AUTH_SERVER}/projects/${param}/user`);
  }

  public get userValue(): any {
    return this.authSubject.value;
  }





/*****************************Admin*********************************/

public getUsers(): any {
  return this.httpClient.get<any>(`${this.AUTH_SERVER}/users`);
}

public getUserById(id:any): any {
  return this.httpClient.get<any>(`${this.AUTH_SERVER}/users/${id}`);
}

addUser(datos: User) {
  this.httpClient.post(`${this.AUTH_SERVER}/users`, datos).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

alterUser(array: any, id: any) {
  this.httpClient.put(`${this.AUTH_SERVER}/users/${id}`, array).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
  window.location.reload();
}

deleteUser(id:any) {
  this.httpClient.delete(`${this.AUTH_SERVER}/users/${id}`).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////

addTask(datos: any) {
  this.httpClient.post(`${this.AUTH_SERVER}/tasks`, datos).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

addProject(datos:any) {
  this.httpClient.post(`${this.AUTH_SERVER}/projects`, datos).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

alterTask(datos:any, id:any) {
  this.httpClient.put(`${this.AUTH_SERVER}/tasks/${id}`, datos).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

public getTask(): any {
  return this.httpClient.get<any>(`${this.AUTH_SERVER}/tasks`);
}

deleteProject(id:any) {
  this.httpClient.delete(`${this.AUTH_SERVER}/projects/${id}`).subscribe(data => {
    return data;
  }, error => {
    console.log(error);
  });
}

}
