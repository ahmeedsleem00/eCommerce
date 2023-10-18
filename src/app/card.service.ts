import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl:string = "https://ecommerce.routemisr.com"
  headerdata:any ={
    token:localStorage.getItem("token")
  }
  constructor(private _Http:HttpClient) { }
  
  addtoCart(id:string):Observable<any>{
let body = {productId:id}
    return this._Http.post(`${this.baseUrl}/api/v1/cart`,body,{
      headers: this.headerdata
    })
  }
  getAllProduct():Observable<any>{
    return this._Http.get(`${this.baseUrl}/api/v1/cart`,{
      headers :this.headerdata
    })
  }
    DeleteAllProduct(id:string):Observable<any>{
      return this._Http.get(`${this.baseUrl}/api/v1/cart/${id}`,{
        headers: this.headerdata
      })
    }




}
