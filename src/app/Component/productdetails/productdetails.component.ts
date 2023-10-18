import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails, productInfo } from 'src/app/product-details';
import { ProductService } from 'src/app/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  productDetails:productInfo | null = null


  constructor(private _ActivatedRoute:ActivatedRoute, private _productService:ProductService){
    _ActivatedRoute.params.subscribe((data)=>{


      let id = data['id']
      
      _productService.getDetails(id).subscribe({
        next:(req:ProductDetails)=>{
          this.productDetails = req.data
        }
      })
    
      
    })
  }
}
