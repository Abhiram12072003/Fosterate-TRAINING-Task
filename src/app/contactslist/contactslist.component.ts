import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contact-list';
import { FetchcontactsService } from '../fetchcontacts.service';
import { Contact } from '../Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.scss']
})
export class ContactslistComponent implements OnInit {

  contacts:Contact[]=[];
  constructor(public fetch:FetchcontactsService,private router:Router){    }
  
  ngOnInit(){
    this.getContacts();
  }

  getContacts():void{
    this.fetch.getContacts().subscribe(contacts=>this.contacts=contacts);
  }

  selec(c:number){
    this.fetch.selectedIndex=c;
  }
  
  clickEdit(){
    console.log("Hi");
    this.router.navigate(['/edit']);
  }
  address:any=Contacts[this.fetch.selectedIndex].address.split(",");

  clickDelete(){
    if(Contacts.length==1){
      Contacts.splice(this.fetch.selectedIndex,1);
      this.fetch.showcontact=false;      
    }
    else{
    Contacts.splice(this.fetch.selectedIndex,1);
    this.fetch.selectedIndex=0;
    console.log(Contacts);
    }
  }
}
