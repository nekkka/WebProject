import { Component, OnInit } from '@angular/core';
import { Category, Product, products } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  products = [...products];
  //categoryName: string | null = null;

  constructor(private route: ActivatedRoute,) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('categoryId'));
    /*  console.log(categoryId)
      console.log(products)*/
      if (categoryId) {
        this.products = products.filter(product => product.categoryNameID == categoryId);
      } else {
        this.products = products;
      }
    });
  }

}
