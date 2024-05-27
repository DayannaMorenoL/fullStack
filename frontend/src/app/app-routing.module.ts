import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './paginas/show/show.component';
import { CreateComponent } from './paginas/create/create.component';
import { EditComponent } from './paginas/edit/edit.component';

const routes: Routes = [
  {path:'', component:ShowComponent},
  {path:'crear', component:CreateComponent},
  {path:'actualizar/:id', component:EditComponent},
  {path:'empleado', component:ShowComponent},
  {path:'crearempleado', component:CreateComponent},
  {path:'actualizarempleado/:id', component:EditComponent},
  {path:'proveedor', component:ShowComponent},
  {path:'crearproveedor', component:CreateComponent},
  {path:'actualizarproveedor/:id', component:EditComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


