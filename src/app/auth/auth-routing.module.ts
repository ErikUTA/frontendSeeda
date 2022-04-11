import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardAdminComponent } from "../admin/dashboard-admin/dashboard-admin.component";
import { AdminGuard } from "../guards/admin/admin.guard";
import { UserGuard } from "../guards/user/user.guard";
import { LandingComponent } from "../home/landing/landing.component";
import { LoginComponent } from "../login/login.component";
import { ProgressbarComponent } from "../progressbar/progressbar.component";
import { DashboardComponent } from "../usuarios/dashboard/dashboard.component";
import { ListaComponent } from "../usuarios/lista/lista.component";
import { TaskComponent } from "../usuarios/task/task.component";
import { UsersComponent } from "../usuarios/users/users.component";

const routes: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'loading', component: ProgressbarComponent},
    {path: 'admin', component: DashboardAdminComponent, canActivate: [AdminGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard]},
    {path: 'listas', component: ListaComponent, canActivate: [UserGuard]},
    {path: 'edit', component: UsersComponent, canActivate: [UserGuard]},
    {path: 'task', component: TaskComponent, canActivate: [UserGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {  }