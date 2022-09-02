import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FosterateRoutingModule } from './fosterate-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    FosterateRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class FosterateModule { }
