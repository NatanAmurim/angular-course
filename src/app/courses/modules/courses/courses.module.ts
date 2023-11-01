import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../../courses/courses.component';
import { CourseDetailComponent } from '../../courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoursesComponent
  ]
})
export class CoursesModule { }
