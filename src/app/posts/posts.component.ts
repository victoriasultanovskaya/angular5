import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post/post.service";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

// @see angular5\src\assets\HTTPRequests.png
export class PostsComponent implements OnInit {
    posts: any;


    constructor(private service: PostService) {

    }

    createPost(input: HTMLInputElement) {
        let post = {title: input.value};
        input.value = '';

        this.service.createPost(post)
            .subscribe(response => {
                console.log(response.json());
                post['id'] = response.json().id;
                this.posts.splice(0, 0, post);
            });
    }

    updatePost(post) {
        //Use patch to update only a few of the properties
        this.service.updatePost(post)
            .subscribe((response) => {
                console.log(response.json());
            });

    }

    deletePost(post) {
        this.service.deletePost(post)
            .subscribe((response) => {
                console.log(response.json());
                let index = this.posts.lastIndexOf(post);
                this.posts.splice(index, 1);
            });
    }

    ngOnInit() {
        console.log('INIT');
        this.service.getPosts()
            .subscribe(response => {
                console.log(response.json());
                this.posts = response.json();
            }); //"subscribe" method means - when result is ready we'll be notified
    }
}
