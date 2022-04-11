import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './usuarios/lista/lista.component';
import { ProjectsComponent } from './usuarios/projects/projects.component';
import { DashboardComponent } from './usuarios/dashboard/dashboard.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { UsersComponent } from './usuarios/users/users.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { LandingComponent } from './home/landing/landing.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskComponent } from './usuarios/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ProjectsComponent,
    DashboardComponent,
    DashboardAdminComponent,
    UsersComponent,
    EditComponent,
    LandingComponent,
    SidebarComponent,
    ProgressbarComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
