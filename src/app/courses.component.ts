import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <div>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        </div>
        <div (click)="onDivClicked()">
            <button
                    class="btn btn-primary"
                    title="Save"
                    [class.active]="isActive"
                    [style.backgroundColor]="isActive? 'green' : 'red'"
                    (click)="onSave($event)"
            >Save
            </button>
        </div>
    `
})

export class CoursesComponent {
    title = 'Courses list';
    courses;
    isActive = true;
    email = 'me@gmail.com';

    // Logic for calling HTTP service

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation();

        console.log('Button was clicked!!!', $event);
    }

    onDivClicked() {

        console.log('Div was clicked!!!');
    }

    onKeyUp() {
        // if ($event.keyCode === 13) {
        //     console.log('ENTER was pressed!!!');
        // }
        console.log('ENTER was pressed!!!');
        console.log(this.email);
    }
}
