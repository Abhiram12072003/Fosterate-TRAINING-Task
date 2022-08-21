import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { Contacts } from '../contact-list';
import { FetchcontactsService } from '../fetchcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  contacts:Contact[]=[];
  name:any;
  phno:any;
  email:any;
  onFormSubmit(f:any){
    const a=f.value;
    console.log("a",a);
    const c:Contact={name:a.userName!,phno:(a.mobile)!,email:a.Email!};
    console.log("c",c);
    Contacts[this.fetch.selectedIndex]=c; 
  
  }
  getContacts():void{
    this.fetch.getContacts().subscribe(contacts=>this.contacts=contacts);
  }

  selec(c:number){
    this.fetch.selectedIndex=c;
    this.name=Contacts[this.fetch.selectedIndex].name;
    this.email=Contacts[this.fetch.selectedIndex].email;
    this.phno=Contacts[this.fetch.selectedIndex].phno;
  }
  constructor(public fetch:FetchcontactsService) {
   }

  ngOnInit(): void {
    this.getContacts();
    this.name=Contacts[this.fetch.selectedIndex].name;
    this.email=Contacts[this.fetch.selectedIndex].email;
    this.phno=Contacts[this.fetch.selectedIndex].phno;
  }
  select(i:number){
    console.log("Hi");
   
  }

}
