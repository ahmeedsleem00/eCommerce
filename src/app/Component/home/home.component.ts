import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { Products, product } from 'src/app/product';  // Assuming this is the correct path
import { ProductService } from 'src/app/product.service';  // Assuming this is the correct path

declare let Swal:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  
  searchVal:string = ""
  productList:product[] = []
  constructor(private _ProductServices:ProductService,private _CardService: CardService  ){}
  addCart(id:string){
    this._CardService.addtoCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.status == 'success'){
          Swal.fire(
            'Good job!',
            response.message,
            'success'
          )
        }
        
      }
    })
  }

 ngOnInit():void{


    this._ProductServices.getAllproduct().subscribe({
      next:(req:any)=>{
        console.log(req.data);
        this.productList = req.data
        
      }
    })
 }
}
