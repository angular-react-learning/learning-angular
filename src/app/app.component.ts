import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcssession';

  names : String[] = [
    "Praveen",
    "Amit",
    "Sunil"
  ]

  counteries : String[] = [
    "India",
    "US",
    "UK"
  ]

  numbers : Number[] = [
    3424242423,
    4234242424,
    5676576577
  ]

}
