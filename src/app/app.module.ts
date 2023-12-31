import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailsComponent,
    ContactPageComponent,
    NewListingsPageComponent,
    EditListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
