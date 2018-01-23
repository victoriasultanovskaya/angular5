import {Component} from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";
import {isBoolean} from "util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses;

    onChange(course) {
        let courseIndex = this.courses.indexOf(course);
        this.courses.splice(courseIndex, 1);
    }

    loadCourses() {
        this.courses = [
            {id: 1, name: 'course1'},
            {id: 2, name: 'course2'},
            {id: 3, name: 'course3'},
            {id: 4, name: 'course4'}
        ];
    }

    trackCourse(index, course){
        return (course.id) ? course.id : undefined;
    }
}

