import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'add', component: AddFormComponent},
  {path:'edit',component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FosterateRoutingModule { }
