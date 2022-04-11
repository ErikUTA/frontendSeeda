import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    if(this.service.userValue){
      if(this.service.userValue.coordinator.role === "admin01"){
        setTimeout(()=> {
          window.location.href = '/auth/admin';
        }, 1500);
      }else{
        setTimeout(()=> {
          window.location.href = '/auth/dashboard';
        }, 1500);
      }
    }
  }

}
