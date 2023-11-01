import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor(private _coursesService: CoursesService){
    this.courses = _coursesService.getCourses();
  }

  courses: string[] = [];
}
