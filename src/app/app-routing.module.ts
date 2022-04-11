import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './usuarios/dashboard/dashboard.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { LandingComponent } from './home/landing/landing.component';
import { ListaComponent } from './usuarios/lista/lista.component';
import { ProjectsComponent } from './usuarios/projects/projects.component';
import { UsersComponent } from './usuarios/users/users.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/auth/landing', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
