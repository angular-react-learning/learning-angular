import { Component, OnInit } from '@angular/core';

import { SearchService } from "../../search.service"

@Component({
  selector: 'app-right-col',
  templateUrl: './right-col.component.html',
  styleUrls: ['./right-col.component.scss']
})
export class RightColComponent implements OnInit {

  listing: String[] = [];

  name : number = 0

  constructor(private searchService: SearchService) {
    
  }

  ngOnInit(): void {
    this.listing = this.searchService.peopleList();

    setInterval(()=>{
      this.name = Math.ceil(Math.random() * 10);
    }, 5000)


    this.searchService.getSearchedUser()
    .subscribe((data) => {
      this.listing = this.searchService.peopleList().filter((item) => {
        return item.toUpperCase().indexOf(data.user.toUpperCase()) > -1;
      })
    })

  }

}
