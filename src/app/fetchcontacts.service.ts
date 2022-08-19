import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { Observable, of } from 'rxjs';
import { Contacts } from './contact-list';
@Injectable({
  providedIn: 'root'
})
export class FetchcontactsService {
  selectedIndex:number=0;
  showcontact:boolean=true;
  constructor() { }
  getContacts():Observable<Contact[]>{
    return of(Contacts);
  }

  getContact(name:String):Observable<Contact>{
    const contact=Contacts.find(h=>h.name==name)!;
    return of(contact);
  }

}
