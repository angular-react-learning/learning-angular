import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcs-form',
  templateUrl: './tcs-form.component.html',
  styleUrls: ['./tcs-form.component.scss']
})
export class TcsFormComponent implements OnInit {


  username : string = "";
  password : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
