import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as crypto from 'crypto-js';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  usuarios:any = [];
  fullname:any = "";
  email:any = "";
  password:any = "";
  cell_phone:any = "";
  job_title:any = "";
  role_id:any = "";
  idUser:any = "";

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  
  getUsuarios():void {
    this.service.getUsers().subscribe((data:any) => {
      this.usuarios = data;
      console.log(data);
    });
  }

  onAdd(frm:any):void {
    var array:any = {
        fullname: frm.value.fullname,
        email: frm.value.email,
        password: frm.value.password,
        cell_phone: frm.value.cell_phone.toString(),
        status: true,
        job_title: frm.value.job_title,
        entry_date: "2022-04-05T00:26:40.989Z",
        users_id: 0,
        role_id: frm.value.role_id,
        user_id: 0
    }
    this.service.addUser(array);
    window.location.reload();
    // console.log(array);
  }

  deleteUser(id:any) {
    this.service.deleteUser(id);
    window.location.reload();
  }

  changeUser(id:any) {
    this.service.getUserById(id).subscribe((data:any) => {
      this.fullname = data.fullname;
      this.email = data.email;
      this.password = data.password;
      this.cell_phone = data.cell_phone;
      this.job_title = data.job_title;
      this.role_id = data.role_id;
      this.idUser = data.id;
      console.log(data);
    });
  }

  alterUser(frm:any){
    var array = {
      id: this.idUser,
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      cell_phone: this.cell_phone.toString(),
      status: true,
      job_title: this.job_title,
      entry_date: "2022-04-05T00:26:40.989Z",
      users_id: 0,
      role_id: this.role_id,
      user_id: 0
    }
    this.service.alterUser(array, this.idUser);
    // window.location.reload();
  }

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
