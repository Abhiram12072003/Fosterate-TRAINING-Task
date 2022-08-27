import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { EditComponent } from './edit/edit.component';
//import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'',component:ContactslistComponent},
  { path: 'add', component: AddFormComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports:[RouterModule]
})

export class AppRoutingModule { }