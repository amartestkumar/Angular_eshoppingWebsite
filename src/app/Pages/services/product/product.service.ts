import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "https://localhost:7149/api"; // Adjusted the base URL

  constructor(private httpClient: HttpClient) { }

  getAllcategory(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/Product`); // Adjusted URL formatting
  }

  postProductvalue(productData: any): Observable<any> { // Added productData parameter
    return this.httpClient.post<any>(`${this.baseURL}/Product`, productData); // Adjusted URL formatting and added productData
  }

  getAllProducts():Observable<any>
  {
    return this.httpClient.get<any>(`${this.baseURL}/Product/GetAllMyAllProductList`) //https://localhost:7149/api/Product/GetAllMyAllProductList
  }

  deleteProductbyProductid(productId: any): Observable<any> {
    debugger;
    return this.httpClient.post<any>(`${this.baseURL}/Product/DeleteByProductId?id=${productId}`, {});
  }
  UpdateProductDetailsApiMethod(producdate:any):Observable<any>
  {
    return this.httpClient.post<any>(`${this.baseURL}/Product/UpdateProductListActionApi`,producdate);
  }
  
}

