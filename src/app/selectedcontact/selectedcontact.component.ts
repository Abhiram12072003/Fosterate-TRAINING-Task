import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FetchcontactsService } from '../fetchcontacts.service';
import { Contact } from '../Contact';
import { ContactslistComponent } from '../contactslist/contactslist.component';
//import { DisplaycontactService } from '../displaycontact.service';

@Component({
  selector: 'app-selectedcontact',
  templateUrl: './selectedcontact.component.html',
  styleUrls: ['./selectedcontact.component.scss']
})
export class SelectedcontactComponent implements OnInit {

  contact?:Contact;
  constructor(private route:ActivatedRoute,
    private fetchcontactService:FetchcontactsService,
    //private d:DisplaycontactService,
    private location:Location)
    { }
  
  /*getContact():void{
    const name=(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero)
  }*/
  


  ngOnInit(): void {

  }
  

}
