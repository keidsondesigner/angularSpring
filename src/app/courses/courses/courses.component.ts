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
  //courses: Course[] = [];
  courses$: Observable<Course[]>;

  displayedColumns: string[] = ['name', 'category'];

  constructor( private _coursesService: CoursesService ) {
    // caso a variável " this.courses " seja passado no "ngOnInit",
    // o typescript irá reclamar, "está variável não esta sendo inicializada!"

    //this._coursesService.listAll().subscribe(dados => this.courses = dados);
    this.courses$ = this._coursesService.listAll();
  }

  ngOnInit(): void {
  }

}
