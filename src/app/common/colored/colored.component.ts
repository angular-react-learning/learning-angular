import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-colored',
  templateUrl: './colored.component.html',
  styleUrls: ['./colored.component.scss']
})
export class ColoredComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name : string;

  color : string = "blue";
  fontsize : number = 10

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngOnChanges() : void {
    console.log("ngOnChanges")
  }

  ngOnDestroy() : void {
    console.log("ngOnDestroy")
  }


}