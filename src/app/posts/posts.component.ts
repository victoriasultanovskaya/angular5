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
        let post = {title: input.value};
        /* Optimistic update - first update User Interface then push updates to server and wait for the response :-) */
        this.posts.splice(0, 0, post);

        input.value = '';

        this.service.create(post)
            .subscribe(
                newPost => {
                    post['id'] = newPost.id;

                },
                (error: AppError) => {
                    /*But if something goes wrong we'll roll back changes*/
                    /*go to position 0 and delete 1 item*/
                    this.posts.splice(0, 1);

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
                updatedPost => {
                    console.log(updatedPost);
                });

    }

    deletePost(post) {
        /*Optimistic update*/
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        /*--Optimistic update*/

        this.service.delete(post.id)
            // .subscribe(
            //     null,
            //     (error: AppError) => {
            //         /*Rollback in case of error*/
            //         this.posts.splice(index, 0, post);
            //
            //         if (error instanceof NotFoundError) {
            //             alert('This post has already been deleted.');
            //         } else {
            //             throw error;
            //         }
            //     })
        ;
    }

    ngOnInit() {
        this.service.getAll()
        /**
         * "subscribe" method means - when result is ready we'll be notified
         * Observables are lazy - nothing happens until you subscribe them
         * In other words, if we simply call delete method here,
         * our service is not going to call our backend.
         * @see angular5\src\assets\Observables_vs_Promises.png
         */
            .subscribe(posts => this.posts = posts);
    }
}
