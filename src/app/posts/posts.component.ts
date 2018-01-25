import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post/post.service';
import {AppError} from '../common/errors/app-error';
import {NotFoundError} from '../common/errors/not-found-error';
import {BadRequestError} from '../common/errors/bad-request-error';

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
        const post = {title: input.value};
        input.value = '';

        this.service.create(post)
            .subscribe(
                response => {
                    console.log(response.json());
                    post['id'] = response.json().id;
                    this.posts.splice(0, 0, post);
                },
                (error: AppError) => {
                    if (error instanceof BadRequestError) {
                        /*this.form.setErrors(error.json());*/
                    } else {
                        throw error;
                    }
                });
    }

    updatePost(post) {
        /*Use patch to update only a few of the properties*/
        this.service.update(post)
            .subscribe(
                response => {
                    console.log(response.json());
                });

    }

    deletePost(post) {
        this.service.delete(post.id)
        /*this.service.delete(345)*/
            .subscribe(
                response => {
                    console.log(response.json());
                    let index = this.posts.lastIndexOf(post);
                    this.posts.splice(index, 1);
                },
                (error: AppError) => {
                    if (error instanceof NotFoundError) {
                        alert('This post has already been deleted.');
                    } else {
                        throw error;
                    }
                });
    }

    ngOnInit() {
        this.service.getAll()
        //"subscribe" method means - when result is ready we'll be notified
            .subscribe(
                response => {
                    console.log(response.json());
                    this.posts = response.json();
                });
    }
}
