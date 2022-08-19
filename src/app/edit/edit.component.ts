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

  contacts:any=Contacts;
  onFormSubmit(f:any){
    const a=f.value;
    console.log("a",a);
    const c:Contact={name:a.userName!,phno:(a.mobile)!,email:a.Email!};
    console.log("c",c);
    Contacts[this.fetch.selectedIndex]=c;   
  }
  selec(c:number){
    this.fetch.selectedIndex=c;
  }
  constructor(public fetch:FetchcontactsService) { }

  ngOnInit(): void {
  }
  select(i:number){
    console.log("Hi");
  }

}
