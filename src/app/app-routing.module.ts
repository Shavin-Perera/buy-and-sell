import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';

const routes: Routes = [
  {path:'listings', component: ListingsPageComponent,pathMatch:'full'},
  {path:'listings/:id', component: ListingDetailsComponent,pathMatch:'full'},
  {path:'contact/:id', component: ContactPageComponent,pathMatch:'full'},
  {path:'edit-listings/:id', component: EditListingPageComponent,pathMatch:'full'},
  {path:'my-listings', component: MyListingsPageComponent,pathMatch:'full'},
  {path:'new-listings', component: NewListingsPageComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
