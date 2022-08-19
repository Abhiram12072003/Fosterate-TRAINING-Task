import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
//import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { SelectedcontactComponent } from './selectedcontact/selectedcontact.component';
@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    EditComponent,
    //ContactListComponent,
    ContactslistComponent,
    //SelectedcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
