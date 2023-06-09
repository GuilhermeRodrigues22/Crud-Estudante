import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
