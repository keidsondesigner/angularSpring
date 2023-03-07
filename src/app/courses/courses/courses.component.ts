import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] =  [
    { _id: '1', name: 'Angular 14', category: 'Frontend'},
    { _id: '2', name: 'Reactjs', category: 'Frontend'},
    { _id: '3', name: 'Vuejs', category: 'Frontend'}
  ];

  displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
