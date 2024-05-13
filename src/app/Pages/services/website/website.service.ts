import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private HttpClient:HttpClient) { }
  private BASEURL="https://localhost:7149/api";

 GetAProductDetails(productid:any):Observable<any>{
  return  this.HttpClient.get(`${this.BASEURL}/Product/GetProductDetailById?id=${productid}`,{})
 }
}
