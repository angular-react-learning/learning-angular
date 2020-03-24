import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcs-listing',
  templateUrl: './tcs-listing.component.html',
  styleUrls: ['./tcs-listing.component.scss']
})
export class TcsListingComponent implements OnInit {

  @Input() listing : any;

  constructor() { }

  ngOnInit(): void {
  }


  handleClickEvent()
    {
        alert(new Date());
    }

}
