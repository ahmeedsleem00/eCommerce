import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data.data;
    });
  }
}
