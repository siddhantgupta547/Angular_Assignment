import { Component, Input, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: any;
  private dataService: DataService;
  wishListedCourses = new Array();
  isWishListed = false;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {}

  onAddToCart() {
    this.dataService.addToCart(this.course);
  }

  ngDoCheck(): void {
    this.dataService
      .getWishListedCourses()
      .subscribe((wishListedCourse: any) => {
        this.wishListedCourses = wishListedCourse;
        const wishList = this.wishListedCourses.filter(
          (wishListCourse: any) => {
            return wishListCourse.id === this.course.id;
          }
        );
        if (wishList.length === 1) this.isWishListed = true;
      });
  }

  onClick(e: any) {
    console.log('ran');
    this.dataService.addToWishList(this.course);
  }
}
