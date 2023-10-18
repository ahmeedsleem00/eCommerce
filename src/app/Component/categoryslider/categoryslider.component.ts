import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.css']
})
export class CategorysliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,

    dots: false,
    navSpeed: 700,
   
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
        items:8
      }
    },

  }
  categorySlider: any[] = []
  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    this._ProductService.getAllCategory().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categorySlider = res.data
      }
    })
  }
}
