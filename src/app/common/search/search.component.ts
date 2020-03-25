import { Component, OnInit } from '@angular/core';

import { SearchService } from "../../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
  }

  searchValueChange(event)
    {
      this.searchService.userSearched(event.target.value);
    }

}
