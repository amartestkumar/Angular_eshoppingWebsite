import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router'; // Import Router from @angular/router
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  IsSidePannelHideShow: boolean = false;
  
  productObj: any = {
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
  };

  categoryList: any[] = [];
  productList: any[] = [];
  public productid="";
  constructor(private productSRV: ProductService, private router: Router) { }
  

  ngOnInit(): void {
    
    this.productSRV.getAllcategory().subscribe(
      (catdata) => {
        this.categoryList = catdata;
        console.log(this.categoryList);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );

    this.productSRV.getAllProducts().subscribe(
      (res: any) => {
        this.productList = res;
        console.log(this.productList);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  GetProductListMethos() {
    this.productSRV.getAllProducts().subscribe((result: any) => {
      if (result != null) {
        this.productList = result;
      }
    })
  }

  OnCreateProdut() {
    this.productSRV.postProductvalue(this.productObj).subscribe((res: any) => {
      if (res != null) {
        alert("Product Added Successfully");
        this.GetProductListMethos();
      } else {
        alert("Some Error Occurred!..");
      }
    })
  }

  OpenCardSidePannel() {
    this.IsSidePannelHideShow = true;
  }

  CloseCardSidePannel() {
    this.IsSidePannelHideShow = false;
  }


  //For Detail Product Method
 OnClickGetDetailPage(item: any) {
  debugger;
    this.router.navigate(['/checkout'],{queryParams:{item}});
    console.log(item);
}

  onEdit(item:any)
  {
    debugger;
    this.productObj=item;
    this.OpenCardSidePannel();
  }
  onDelete(item:any){
    debugger;
    this.productSRV.deleteProductbyProductid(item).subscribe((res:any)=>
    {
      alert("data deleted successfully");
      this.GetProductListMethos();
    })
  }
  OnUpdateProduct(item:any){
    this.productSRV.UpdateProductDetailsApiMethod(item).subscribe((res:any)=>{
      debugger;
      if(res!=null)
        {
          alert("Product Updated Successfully!");
          this.IsSidePannelHideShow=false;
        }
        else
        {
          alert("Some Error Occured please try angain!.")
        }
    })
  }
  
}
