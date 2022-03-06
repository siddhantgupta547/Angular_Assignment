import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private dataService: DataService;
  CartCourses = new Array();
  recommendedCourses = new Array();

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.dataService.getCartItems().subscribe((cartItem) => {
      this.CartCourses = cartItem;
    });
    this.recommendedCourses = this.dataService.recommededCourses();
  }
}
