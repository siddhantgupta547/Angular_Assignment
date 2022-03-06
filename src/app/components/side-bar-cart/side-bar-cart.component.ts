import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-side-bar-cart',
  templateUrl: './side-bar-cart.component.html',
  styleUrls: ['./side-bar-cart.component.scss'],
})
export class SideBarCartComponent implements OnInit {
  private dataService: DataService;
  totalCost = new Array();
  cart = new Array();
  @Input() isCart = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.dataService.getCartItems().subscribe((cartItem) => {
      this.cart = cartItem;
    });
    this.dataService.getTotalCost().subscribe((price) => {
      console.log(price);
      this.totalCost = price;
    });
  }
}
