import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductShoeComponent } from './product-shoe/product-shoe.component';
import { ProductTshirtComponent } from './product-tshirt/product-tshirt.component';
import { ProductLaptopComponent } from './product-laptop/product-laptop.component';
import { ProductBabyStrollerComponent } from './product-baby-stroller/product-baby-stroller.component';
import { ProductWatchComponent } from './product-watch/product-watch.component';
import { ProductHeadphonesComponent } from './product-headphones/product-headphones.component';
import { ProductWashingMachineComponent } from './product-washing-machine/product-washing-machine.component';
import { ProductChocolatesComponent } from './product-chocolates/product-chocolates.component';
import { ProductBabyShoesComponent } from './product-baby-shoes/product-baby-shoes.component';
import { ProductRefridgeratorComponent } from './product-refridgerator/product-refridgerator.component';
import { ProductTravelbagComponent } from './product-travelbag/product-travelbag.component';
import { ProductAcComponent } from './product-ac/product-ac.component';
import { NavarathriComponent } from './navarathri/navarathri.component';
import { OffersComponent } from './offers/offers.component';
import { ProductCricketbatComponent } from './product-cricketbat/product-cricketbat.component';
import { ProductMixerComponent } from './product-mixer/product-mixer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductPenComponent } from './product-pen/product-pen.component';
import { ProductPhoneComponent } from './product-phone/product-phone.component';
import { NewArrivalsComponent }  from './new-arrivals/new-arrivals.component';
import { TermsCondtionsComponent } from './terms-condtions/terms-condtions.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { SipsPaymentComponent } from './sips-payment/sips-payment.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, SigninComponent,
    SignupComponent,
    ProductShoeComponent,
    ProductTshirtComponent,
    ProductLaptopComponent,
    ProductBabyStrollerComponent,
    ProductWatchComponent,
    ProductHeadphonesComponent,
    ProductWashingMachineComponent,
    ProductChocolatesComponent,
    ProductBabyShoesComponent,
    ProductRefridgeratorComponent,
    ProductTravelbagComponent,
    ProductAcComponent,
    NavarathriComponent,
    OffersComponent,
    ProductCricketbatComponent,
    ProductMixerComponent,
    ProductPenComponent,
    ProductPhoneComponent,
    NewArrivalsComponent,
    TermsCondtionsComponent,
    CartComponent,
    SipsPaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {
        path : 'sips-payment',
        component : SipsPaymentComponent
      },
      {
        path : 'sips-cart',
        component : CartComponent
      },
      {
        path: '' , pathMatch: 'full' , redirectTo : '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'terms-conditions',
        component: TermsCondtionsComponent
      },
      {
        path: 'new-arrivals',
        component: NewArrivalsComponent
      },
      {
        path: 'offers',
        component: OffersComponent
      },
      {
        path: 'navarathri',
        component: NavarathriComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'product-shoe',
        component: ProductShoeComponent
      },
      {
        path: 'product-pen',
        component: ProductPenComponent
      },
      {
        path: 'product-tshirt',
        component: ProductTshirtComponent
      },
      {
        path: 'product-laptop',
        component: ProductLaptopComponent
      },
      {
        path: 'product-phone',
        component: ProductPhoneComponent
      },
      {
        path: 'product-refridgerator',
        component: ProductRefridgeratorComponent
      },
      {
        path: 'product-ac',
        component: ProductAcComponent
      },
      {
        path: 'product-mixer',
        component: ProductMixerComponent
      },
      {
        path: 'product-baby-stroller',
        component: ProductBabyStrollerComponent
      },
      {
        path: 'product-baby-shoes',
        component: ProductBabyShoesComponent
      },
      {
        path: 'product-watch',
        component: ProductWatchComponent
      },
      {
        path: 'product-travelbag',
        component: ProductTravelbagComponent
      },
      {
        path: 'product-headphones',
        component: ProductHeadphonesComponent
      },
      {
        path: 'product-washing-machine',
        component: ProductWashingMachineComponent
      },
      {
        path: 'product-chocolates',
        component: ProductChocolatesComponent
      },
      {
        path: 'product-cricketbat',
        component: ProductCricketbatComponent
      },



    ]),
    NgbModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
