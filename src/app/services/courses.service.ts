import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Course } from '../courses/model/course';
import { Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient ) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/cursos`)
    .pipe(
      take(1),
      tap(retorno => console.log('retonor getAllCourses()', retorno))
    );
  }
}
