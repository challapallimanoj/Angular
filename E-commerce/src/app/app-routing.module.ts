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
import { OffersComponent } from './offers/offers.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ComparisionComponent } from './comparision/comparision.component';

const routes: Routes = [
 
    {
      path:"",
      component:HomeComponent
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
      path : 'sips-cart',
      component : CartComponent
    },
    {
      path:'home',
      component:HomeComponent,
    },
    {
      path:'terms-conditions',
      component:TermsCondtionsComponent,
      canActivate :[AuthGuard]
    },
      {
        path: 'offers',
        component : OffersComponent,
        canActivate :[AuthGuard]
      },
    {
      path:'new-arrivals',
      component:NewArrivalsComponent,
      canActivate :[AuthGuard]
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
    {
      path:'chatbot',
      component:ChatbotComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
