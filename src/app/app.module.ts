import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TcsListingComponent } from './tcs-listing/tcs-listing.component';
import { TcsFormComponent } from './tcs-form/tcs-form.component';
import { HeaderComponent } from './common/header/header.component';
import { LeftColComponent } from './common/left-col/left-col.component';
import { RightColComponent } from './common/right-col/right-col.component';

@NgModule({
  declarations: [
    AppComponent,
    TcsListingComponent,
    TcsFormComponent,
    HeaderComponent,
    LeftColComponent,
    RightColComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
