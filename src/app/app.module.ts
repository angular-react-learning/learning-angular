import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TcsListingComponent } from './tcs-listing/tcs-listing.component';
import { TcsFormComponent } from './tcs-form/tcs-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TcsListingComponent,
    TcsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
