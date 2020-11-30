import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HomeComponent } from './home/home.component';
import { ProductPenComponent } from './product-pen/product-pen.component';
import { ProductPhoneComponent } from './product-phone/product-phone.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { TermsCondtionsComponent } from './terms-condtions/terms-condtions.component'
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path : 'sips-cart',
    component : CartComponent
  },
    {
      path:"",pathMatch:"full",redirectTo:"/home"
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'terms-conditions',
      component:TermsCondtionsComponent
    },
    {
      path:'new-arrivals',
      component:NewArrivalsComponent
    },

    {
      path:'signin',
      component:SigninComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'product-shoe',
      component:ProductShoeComponent
    },
    {
      path:'product-tshirt',
      component:ProductTshirtComponent
    },
    {
      path:'product-laptop',
      component:ProductLaptopComponent
    },
    {
      path:'product-phone',
      component:ProductPhoneComponent
    },
    {
      path:'product-refridgerator',
      component:ProductRefridgeratorComponent
    },
    {
      path:'product-ac',
      component:ProductAcComponent
    },
    {
      path:'product-baby-stroller',
      component:ProductBabyStrollerComponent
    },
    {
      path:'product-baby-shoes',
      component:ProductBabyShoesComponent
    },
    {
      path:'product-watch',
      component:ProductWatchComponent
    },
    {
      path:'product-travelbag',
      component:ProductTravelbagComponent
    },
    {
      path:'product-headphones',
      component:ProductHeadphonesComponent
    },
    {
      path:'product-washing-machine',
      component:ProductWashingMachineComponent
    },
    {
      path:'product-chocolates',
      component:ProductChocolatesComponent
    },
    {
      path:'product-pen',
      component:ProductPenComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
