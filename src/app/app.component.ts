import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  showFiller = false;
  bandera: any = false;
  data: any = localStorage.getItem("ACCESS_TOKEN");
  constructor(){
    if(this.data){
      this.bandera = true;
    }else{
      this.bandera = false;
    }
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): 
  
  void {
  }

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
