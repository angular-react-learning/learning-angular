import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output() searchedValue = new EventEmitter();

  ngOnInit(): void {
  }

  searchValueChange(event) {
    this.searchedValue.emit(event.target.value)
  }

}
