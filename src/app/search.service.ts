import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  peopleList()
    {
      return [
        "Praveen",
        "Amit",
        "Sunil",
        "John"
      ]
    }
}
