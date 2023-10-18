import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: any;

  constructor(private _brandService: BrandService) { }

  ngOnInit(): void {
    this._brandService.getBrands().subscribe(data => {
      this.brands = data.data;
      console.log(this.brands);
      
    });
  }
}
