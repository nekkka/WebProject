import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../models';
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
  products : Product[] = [];
  //categoryName: string | null = null;

  constructor(private route: ActivatedRoute, private appService: AppService) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('categoryId'));
      this.appService.getProductsByCategoryId(categoryId).subscribe(
        products => {
          this.products = products
        }
      )
   
    });
  }

}
