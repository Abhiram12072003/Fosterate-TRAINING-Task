import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Contact';
import { Contacts } from '../../contact-list';
import { FetchcontactsService } from '../../services/fetchcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  contacts:Contact[]=[];
  name:any;
  phno:any;
  email:any;
  address:any;
  landline:any;
  website:any;
  onFormSubmit(f:any){
    const a=f.value;
    console.log("a",a);
    const c:Contact={name:a.userName!,phno:(a.mobile)!,email:a.Email!,address:(a.Address.split(","))!,website:(a.Website)!,landline:(a.Landline)!};
    console.log("c",c);
    Contacts[this.fetch.selectedIndex]=c; 
    this.router.navigate(['/']);
  }
  getContacts():void{
    this.fetch.getContacts().subscribe(contacts=>this.contacts=contacts);
  }

  selec(c:number){
    this.fetch.selectedIndex=c;
    this.name=Contacts[this.fetch.selectedIndex].name;
    this.email=Contacts[this.fetch.selectedIndex].email;
    this.phno=Contacts[this.fetch.selectedIndex].phno;
    this.address=Contacts[this.fetch.selectedIndex].address.join(',');
    this.website=Contacts[this.fetch.selectedIndex].website;
    this.landline=Contacts[this.fetch.selectedIndex].landline;
    
  }
  constructor(public fetch:FetchcontactsService,private router:Router) {
   }

  ngOnInit(): void {
    this.getContacts();
    this.name=Contacts[this.fetch.selectedIndex].name;
    this.email=Contacts[this.fetch.selectedIndex].email;
    this.phno=Contacts[this.fetch.selectedIndex].phno;
    this.address=Contacts[this.fetch.selectedIndex].address.join(',');
    this.website=Contacts[this.fetch.selectedIndex].website;
    this.landline=Contacts[this.fetch.selectedIndex].landline;    
  }
  select(i:number){
    console.log("Hi");
     
  }

}
