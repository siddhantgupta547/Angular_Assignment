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
  searchFilter = '';

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    this.paginatedCourses = this.dataService.getCourseAndInitialize().slice();
    this.setValues(this);
  }

  /*----------------------------------------------------Pagination Code---------------------------------------------------*/

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

  /*--------------------------------------------Header------------------------------------------------------*/

  onSelect(e: any) {
    const value = e.target.value;
    if (value === '') return;
    else if (value === 'asc') {
      this.currentPage = 1;
      this.paginatedCourses = this.dataService.sortPriceAsc();
    } else if (value === 'desc') {
      this.currentPage = 1;
      this.paginatedCourses = this.dataService.sortPriceDesc();
    }
  }

  setValues(self: any) {
    self.currentPage = self.dataService.currentPage;
    self.totalPages = self.dataService.total;
    self.allPaginatedCourses = self.dataService.paginatedCourses.slice();
  }

  onText() {
    let timeoutId: any;
    const self = this;
    return function (event: any) {
      clearTimeout(timeoutId);
      const searchString = event.target.value;
      if (searchString === null) {
        self.dataService.getCourseAndInitialize();
        self.setValues(self);
        return;
      }
      timeoutId = setTimeout(() => {
        self.paginatedCourses = self.dataService.OnSearch(searchString);
        self.setValues(self);
      }, 1000);
    };
  }

  onSearch = this.onText();

  /*----------------------------------------------------***********---------------------------------------------------*/
}
