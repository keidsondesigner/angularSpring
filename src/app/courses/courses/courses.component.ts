import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$!: Observable<Course[]>;

  displayedColumns: string[] = ['name', 'category'];

  constructor( private _coursesService: CoursesService ) {
  }

  ngOnInit(): void {
    this.courses$ = this._coursesService.getAllCourses();
  }
}
