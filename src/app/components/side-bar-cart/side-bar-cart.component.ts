import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-side-bar-cart',
  templateUrl: './side-bar-cart.component.html',
  styleUrls: ['./side-bar-cart.component.scss'],
})
export class SideBarCartComponent implements OnInit {
  private dataService: DataService;

  cart = new Array();
  @Input() isCart = false;
  totalPrice: any;
  savedAmount: any;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.dataService.getCartItems().subscribe((cartItem) => {
      this.cart = cartItem;
      this.totalPrice = this.dataService.getTotalCost();
      this.savedAmount = this.dataService.getSavedAmount();
    });
  }

  onCheckout() {
    this.dataService.cart = [];
  }
}
