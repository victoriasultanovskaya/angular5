import {Component} from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";
import {isBoolean} from "util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [
        {id: 1, name: 'course1'},
        {id: 2, name: 'course2'},
        {id: 3, name: 'course3'},
        {id: 4, name: 'course4'}
    ];

    onAdd() {
        let nextIndex = this.courses.length + 1;
        this.courses.push({id: nextIndex, name: 'course' + nextIndex});
    }

    onChange(course) {
        let courseIndex = this.courses.indexOf(course);
        this.courses.splice(courseIndex, 1);
    }
}

