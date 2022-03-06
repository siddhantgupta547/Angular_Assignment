import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishListedCourses: any;

  private dataService: DataService;
  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    //this.wishListedCourses = this.dataService.wishListedCourses.slice();
  }

  ngDoCheck(): void {
    this.dataService
      .getWishListedCourses()
      .subscribe((wishListedCourse: any) => {
        this.wishListedCourses = wishListedCourse;
      });
  }
}
