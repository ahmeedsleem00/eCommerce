import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = "https://ecommerce.routemisr.com"
  constructor(private _http:HttpClient) { }

  getAllproduct():Observable<any>{

    return this._http.get(`${this.baseUrl}/api/v1/products`)
  }
  getDetails(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/products/${id}`)

   
  }
  brandsDetails():Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/brands`)
}
getAllCategory(): Observable<any> {

  return this._http.get(`${this.baseUrl}/api/v1/categories`)
}


}
