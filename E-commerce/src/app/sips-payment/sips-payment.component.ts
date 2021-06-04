import { Component, AfterViewChecked} from '@angular/core';

declare let paypal : any;

@Component({
  selector: 'app-sips-payment',
  templateUrl: './sips-payment.component.html',
  styleUrls: ['./sips-payment.component.css']
})
export class SipsPaymentComponent implements AfterViewChecked {
 addScript : boolean=false;
 paypalLoad :boolean = false;
 finalAmount : number =1;

 paypalConfig ={
   env:'sandbox',
   client :{
     sandbox :'ATYc7r5rZiwJSb8gXP26Rluc9jvwaMqrYUsT2YNePOhSseMmWA7exHB75b_Ub6YpxC5bld-fWWK_TPRR',
     production :'EPgKetTrpAutwbINhuUtXJ6wzTLuK_w4LZDxgrXL38Em3PGvBnLVJpGDjVHPO8KFVSlbjk3_j-oHiJdO'
   },
   commit :true,
   payment :( data ,actions)=>{
     return actions.payment.create({
       payment:{
         transactions :[
           {amount :{total : this.finalAmount , currency :'INR'}}
         ]
       }
     });
   },
   onAuthorize: (data ,actions)=>{
     return actions.payment.execute().then((payment)=>{

     })
   }
 };
 ngAfterViewChecked(): void{
  if(!this.addScript){
    this.addPaypalScript().then(()=>{
      paypal.Button.render(this.paypalConfig , '#paypal-checkout-btn');
      this.paypalLoad=true;
    })
  }
 }
 addPaypalScript(){
   this.addScript=true;
   return new Promise((resolve ,reject)=>{
    let scripttagElement =document.createElement('script');
    scripttagElement.src ='https://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload =resolve ;
    document.body.appendChild(scripttagElement);
   })
 }
}
