import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  private BASEURL = "https://localhost:7149/api";

  GetAllCategoryValueAPI(): Observable<any> {
    return this.httpClient.get(`${this.BASEURL}/Product`);
  }

  PostCategoryMethod(categoryobj:any):Observable<any>{
    debugger;
    return this.httpClient.post(`${this.BASEURL}/Product/SaveCategoryApi`,categoryobj)
  }
}


