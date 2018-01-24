import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    posts: any;

    constructor(http: Http) {
        http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(response => {
                console.log(response.json());
                this.posts = response.json();
            }); //"subscribe" method means - when result is ready we'll be notified
    }
}
