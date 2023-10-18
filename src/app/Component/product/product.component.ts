import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  categories: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllproduct().subscribe(data => {
      this.categories = data.data;
    });
  }

}
