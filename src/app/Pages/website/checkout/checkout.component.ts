import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../services/website/website.service';
import { routes } from '../../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
//define productid as item from productcomponent page
productid: any = {};
aproductlist: any[] = [];
  ProductObject:any={
    "productId":0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": "0",
    "productImageUrl": ""
  }
constructor(private Productsrv:WebsiteService,private routes:ActivatedRoute)
{}
ngOnInit(): void {
  debugger;
  this.routes.queryParams.subscribe(param=>{
    this.productid=param['item'];
   console.log('product ID',this.productid);
 })
 //for Getting the A Particular Peroduct data through the api
    this.Productsrv.GetAProductDetails(this.productid).subscribe((result:any)=>{
      this.aproductlist=result;
      console.log(this.aproductlist);
    })

   
}
DetailOfProduct(){
  this.Productsrv.GetAProductDetails(this.productid).subscribe((result:any)=>{
    this.aproductlist=result;
    console.log(this.aproductlist);
  })
debugger;

}
}
