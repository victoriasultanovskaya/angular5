import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

// @see angular5\src\assets\HTTPRequests.png
export class PostsComponent {
    posts: any;
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
        http.get(this.url)
            .subscribe(response => {
                console.log(response.json());
                this.posts = response.json();
            }); //"subscribe" method means - when result is ready we'll be notified
    }

    createPost(input: HTMLInputElement) {
        let post = {title: input.value};
        input.value = '';

        this.http.post(this.url, JSON.stringify(post))
            .subscribe(response => {
                console.log(response.json());
                post['id'] = response.json().id;
                this.posts.splice(0, 0, post);
            });
    }
}
