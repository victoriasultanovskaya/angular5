import {Component, OnInit} from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
    title = 'Authors';
    authors;

    constructor(service: AuthorsService) {
        this.authors = service.getAuthors();
    }

    ngOnInit() {
    }

    getTitle() {
        return this.title;
    }

}
