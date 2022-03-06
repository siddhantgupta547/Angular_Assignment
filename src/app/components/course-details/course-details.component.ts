import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/dataService';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  private dataService: DataService;

  constructor(private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const courseIdFromRoute = Number(routeParams.get('courseId'));
    console.log(courseIdFromRoute);
    this.course = this.dataService.courses.find(
      (course) => parseInt(course.id) === courseIdFromRoute
    );
    console.log(this.course);
  }

  addToCart() {
    this.dataService.addToCart(this.course);
  }
}
