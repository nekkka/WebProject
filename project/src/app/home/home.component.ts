import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Category } from '../models';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { category } from '../models';
import { CartService } from '../cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.appService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
        //console.log(this.categories)
      });
  }

  navigateToCategory(categoryId: number): void {
    this.router.navigate(['/category', categoryId]);
  }
}
