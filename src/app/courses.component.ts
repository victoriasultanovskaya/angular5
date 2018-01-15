import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
    selector: 'app-courses',  //<app-courses>
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
    `
})

export class CoursesComponent {
    title = 'Courses list';
    courses;

    // Logic for calling HTTP service

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }
}
