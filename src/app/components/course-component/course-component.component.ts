import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.scss'],
})
export class CourseComponentComponent implements OnInit {
  carray = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
