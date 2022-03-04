import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.scss'],
})
export class CourseComponentComponent implements OnInit {
  private dataService: DataService;
  courses = [];
  totalPages = 0;
  currentPage = 1;
  paginatedCourses = [];
  allPaginatedCourses = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.paginatedCourses = this.dataService
      .getCourseAndInitialize(this.currentPage)
      .slice();
    this.totalPages = this.dataService.total;
    this.currentPage = this.dataService.currentPage;
    this.allPaginatedCourses = this.dataService.paginatedCourses.slice();
  }

  onNext() {
    if (this.currentPage === this.totalPages) return;
    this.currentPage += 1;
    this.paginatedCourses = this.dataService.onNext();
  }

  onPrev() {
    if (this.currentPage === 1) return;
    this.currentPage -= 1;
    this.paginatedCourses = this.dataService.onPrev();
  }

  onPageClick(e: any) {
    this.currentPage = parseInt(e.target.innerText);
    this.paginatedCourses = this.dataService.onPageClick(this.currentPage);
    e.preventDefault();
  }

  /*------------*/
  onSelect(e: any) {
    console.log(e.target.value);
    const value = e.target.value;
    if (value === '') return;
    else if (value === 'asc')
      this.paginatedCourses = this.dataService.sortPriceAsc();
    else if (value === 'desc')
      this.paginatedCourses = this.dataService.sortPriceDesc();
  }
}
