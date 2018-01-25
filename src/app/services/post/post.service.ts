import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from "../../common/app-error";
import {NotFoundError} from "../../common/not-found-error";
import {BadRequestError} from "../../common/bad-request-error";

@Injectable()
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }

    getPosts() {
        return this.http.get(this.url);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post))
            .catch((error: Response) => {
                if (error.status === 400) {
                    return Observable.throw(new BadRequestError());
                }
                return Observable.throw(new AppError(error));
            });
    }

    updatePost(post) {
        //Use put to update
        //this.http.put(this.url, JSON.stringify(post));

        return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
    }

    deletePost(post) {
        return this.http.delete(this.url + '/' + post.id)
            .catch((error: Response) => {
                if (error.status === 404) {
                    return Observable.throw(new NotFoundError());
                }
                return Observable.throw(new AppError(error));
            });
    }
}
