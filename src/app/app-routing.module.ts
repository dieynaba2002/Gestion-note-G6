import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AuthComponent } from './auth/auth.component';
import {EvaluationComponent} from './evaluation/evaluation.component'
import { ListeNoteApprenantComponent } from './liste-note-apprenant/liste-note-apprenant.component';
import { GestionApprenantComponent } from './gestion-apprenant/gestion-apprenant.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardAdminComponent},
  {path: 'auth', component:AuthComponent},
  {path:'evaluation', component:EvaluationComponent}, 
  {path:'liste-note', component:ListeNoteApprenantComponent}, 
  {path:'gestion-apprenant', component:GestionApprenantComponent}, 
  {path: '', redirectTo:'auth', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
