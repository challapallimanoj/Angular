import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
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
import { SipsPaymentComponent } from './sips-payment/sips-payment.component';
import { OffersComponent } from './offers/offers.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import {AuthGuard} from './auth.guard';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ComparisionComponent } from './comparision/comparision.component';

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
    ProductCricketbatComponent,
    ProductMixerComponent,
    ProductPenComponent,
    ProductPhoneComponent,
    NewArrivalsComponent,
    TermsCondtionsComponent,
    CartComponent,
    SipsPaymentComponent,
    OffersComponent,
    ChatbotComponent,
    AdminComponent,
    AdminpanelComponent,
    ComparisionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
   
      {
        path: '' , pathMatch: 'full' , redirectTo : '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'terms-conditions',
        component: TermsCondtionsComponent,
        canActivate :[AuthGuard]
      },
      {
        path : 'sips-payment',
        component : SipsPaymentComponent,
        canActivate :[AuthGuard]
      },
      {
        path : 'sips-cart',
        component : CartComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'offers',
        component : OffersComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'new-arrivals',
        component: NewArrivalsComponent,
        canActivate :[AuthGuard]
      },
  
      {
        path: 'navarathri',
        component: NavarathriComponent,
        canActivate :[AuthGuard]
      },
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'adminpanel',
        component:AdminpanelComponent
      },
      {
        path:'comparision',
        component:ComparisionComponent
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
        component: ProductShoeComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-pen',
        component: ProductPenComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-tshirt',
        component: ProductTshirtComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-laptop',
        component: ProductLaptopComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-phone',
        component: ProductPhoneComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-refridgerator',
        component: ProductRefridgeratorComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-ac',
        component: ProductAcComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-mixer',
        component: ProductMixerComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-baby-stroller',
        component: ProductBabyStrollerComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-baby-shoes',
        component: ProductBabyShoesComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-watch',
        component: ProductWatchComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-travelbag',
        component: ProductTravelbagComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-headphones',
        component: ProductHeadphonesComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-washing-machine',
        component: ProductWashingMachineComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-chocolates',
        component: ProductChocolatesComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'product-cricketbat',
        component: ProductCricketbatComponent,
        canActivate :[AuthGuard]
      },
      {
        path:'chatbot',
        component:ChatbotComponent,
        canActivate :[AuthGuard]
      },


    ]),
    NgbModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
