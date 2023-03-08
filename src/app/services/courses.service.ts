import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../courses/model/course';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor( private http: HttpClient ) { }

  listAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API)
    .pipe(
      take(1),
      tap(resposta => console.log(resposta))
    );
  }
}
