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
            .subscribe(
                response => {
                    console.log(response.json());
                    post['id'] = response.json().id;
                    this.posts.splice(0, 0, post);
                },
                (error: Response) => {
                    if (error.status === 400) {
                        //this.form.setErrors(error.json());
                    } else {
                        alert('An unexpected error occurred');
                        console.log(error);
                    }
                });
    }

    updatePost(post) {
        //Use patch to update only a few of the properties
        this.service.updatePost(post)
            .subscribe(
                response => {
                    console.log(response.json());
                },
                error => {
                    alert('An unexpected error occurred');
                    console.log(error);
                });

    }

    deletePost(post) {
        this.service.deletePost(post)
            .subscribe(
                response => {
                    console.log(response.json());
                    let index = this.posts.lastIndexOf(post);
                    this.posts.splice(index, 1);
                },
                (error: Response) => {
                    if (error.status === 404) {
                        alert('This post has already been deleted.');
                    } else {
                        alert('An unexpected error occurred');
                        console.log(error);
                    }
                });
    }

    ngOnInit() {
        console.log('INIT');
        this.service.getPosts()
        //"subscribe" method means - when result is ready we'll be notified
            .subscribe(
                response => {
                    console.log(response.json());
                    this.posts = response.json();
                },
                error => {
                    alert('An unexpected error occurred');
                    console.log(error);
                });
    }
}
