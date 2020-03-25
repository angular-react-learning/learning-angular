import { Component, OnInit } from '@angular/core';

import { SearchService } from "../../search.service";

@Component({
  selector: 'app-left-col',
  templateUrl: './left-col.component.html',
  styleUrls: ['./left-col.component.scss']
})
export class LeftColComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
  }

  userSearched(user)
    {
      this.searchService.userSearched(user)
    }

}
