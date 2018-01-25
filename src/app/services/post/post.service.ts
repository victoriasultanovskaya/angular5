import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from '../../common/errors/app-error';
import {NotFoundError} from '../../common/errors/not-found-error';
import {BadRequestError} from '../../common/errors/bad-request-error';

@Injectable()
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
    }

    getPosts() {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post))
            .catch(this.handleError);
    }

    updatePost(post) {
        //Use put to update
        //this.http.put(this.url, JSON.stringify(post));

        return this.http
            .patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
            .catch(this.handleError);
    }

    deletePost(post) {
        return this.http.delete(this.url + '/' + post.id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadRequestError());
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error.json()));
        }
        return Observable.throw(new AppError(error));
    }
}
