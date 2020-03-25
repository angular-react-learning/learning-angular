import { Injectable } from '@angular/core';

import { Observable, Subject } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject = new Subject<any>();

  constructor() { }

  userSearched(nameOfUser : string)
    {
      this.subject.next({ user : nameOfUser })
    }

  peopleList()
    {
      return [
        "Praveen",
        "Amit",
        "Sunil",
        "John"
      ]
    }

  getSearchedUser() : Observable<any> {
    return this.subject.asObservable();
  }
}
