import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '\estudante', component : EstudanteComponent},
  {path: '\estudante-form', component : EstudanteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
