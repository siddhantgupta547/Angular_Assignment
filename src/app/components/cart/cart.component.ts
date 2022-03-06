import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private dataService: DataService;
  totalPages = 0;
  currentPage = 1;
  paginatedCartCourses = new Array();
  allPaginatedCourses = [];
  recommendedCourses = new Array();

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.dataService.getCartItems().subscribe((cartItem) => {
      this.paginatedCartCourses = cartItem;
    });
    //this.setValues(this);
    this.recommendedCourses = this.dataService.recommededCourses();
    console.log(this.recommendedCourses);
  }

  setValues(self: any) {
    self.currentPage = self.dataService.currentPage;
    self.totalPages = self.dataService.total;
    self.allPaginatedCourses = self.dataService.paginatedCourses.slice();
  }

  /*----------------------------------------------------Pagination Code---------------------------------------------------*/

  onNext() {
    if (this.currentPage === this.totalPages) return;
    this.currentPage += 1;
    this.paginatedCartCourses = this.dataService.onNext();
  }

  onPrev() {
    if (this.currentPage === 1) return;
    this.currentPage -= 1;
    this.paginatedCartCourses = this.dataService.onPrev();
  }

  onPageClick(e: any) {
    this.currentPage = parseInt(e.target.innerText);
    this.paginatedCartCourses = this.dataService.onPageClick(this.currentPage);
    e.preventDefault();
  }
}
