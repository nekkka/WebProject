import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../models';
import { Product } from '../models';
import { CommonModule } from '@angular/common';
import { category } from '../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: Category[] = [];

  ngOnInit(): void {
    this.categories = category;
    
  }

}
