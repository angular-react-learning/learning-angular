import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored',
  templateUrl: './colored.component.html',
  styleUrls: ['./colored.component.scss']
})
export class ColoredComponent implements OnInit {

  color : string = "blue";
  fontsize : number = 10

  constructor() { }

  ngOnInit(): void {
  }

}
