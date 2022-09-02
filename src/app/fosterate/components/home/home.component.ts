import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../contact-list';
import { FetchcontactsService } from '../../services/fetchcontacts.service';
import { Contact } from '../../Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contacts:Contact[]=[];
  constructor(public fetch:FetchcontactsService,private router:Router){
    //this.address=Contacts[this.fetch.selectedIndex].address;
    if(this.fetch.showcontact==true){
      this.address=Contacts[this.fetch.selectedIndex].address;
      }
    }
  address:any;
  ngOnInit(){
    this.getContacts();
    if(this.fetch.showcontact==true){
    this.address=Contacts[this.fetch.selectedIndex].address;
    } 

  }

  getContacts():void{
    this.fetch.getContacts().subscribe(contacts=>this.contacts=contacts);
  }

  selec(c:number){
    this.fetch.selectedIndex=c;
    if(this.fetch.showcontact==true){
      this.address=Contacts[this.fetch.selectedIndex].address;
      } 
  }
  
  clickEdit(){
    console.log("Hi");
    this.router.navigate(['/edit']);
  }
  

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
