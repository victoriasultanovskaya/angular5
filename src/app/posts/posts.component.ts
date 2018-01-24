import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

// @see angular5\src\assets\HTTPRequests.png
export class PostsComponent implements OnInit {
    posts: any;
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {

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

    updatePost(post) {
        //Use patch to update only a few of the properties
        this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
            .subscribe((response) => {
                console.log(response.json());
            });
        //Use put to update
        //this.http.put(this.url, JSON.stringify(post));
    }

    deletePost(post) {
        this.http.delete(this.url + '/' + post.id)
            .subscribe((response) => {
                console.log(response.json());
                let index = this.posts.lastIndexOf(post);
                this.posts.splice(index, 1);
            });
    }

    ngOnInit() {
        console.log('INIT');
        this.http.get(this.url)
            .subscribe(response => {
                console.log(response.json());
                this.posts = response.json();
            }); //"subscribe" method means - when result is ready we'll be notified
    }
}
