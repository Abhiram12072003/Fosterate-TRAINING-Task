import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Contact } from '../Contact';
import { Contacts } from '../contact-list';
import { FetchcontactsService } from '../fetchcontacts.service';
//import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {
  
  contacts:any=Contacts;
  
  onFormSubmit(f:any){
    const a=f.value;
    console.log("a",a);
    const c:Contact={name:a.userName!,phno:(a.mobile)!,email:a.Email!,landline:a.landline,address:a.address.split(","),website:a.website};
    console.log("c",c);
    Contacts.push(c);  
    this.fetch.showcontact=true;
  }
  
  constructor(private router:Router,public fetch:FetchcontactsService) { }
  
  onKey(event:any){
    const ipv=event.target.value;
  }
  
  ngOnInit(): void {
  }
  
  select(i:number){
    console.log("Hi");
    this.fetch.selectedIndex=i;
    this.router.navigate(['/']);
  }
}
