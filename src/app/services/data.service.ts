import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {NotFoundError} from '../common/errors/not-found-error';
import {BadRequestError} from '../common/errors/bad-request-error';
import {AppError} from '../common/errors/app-error';

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) {
    }

    getAll() {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .catch(this.handleError);
    }

    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
            .catch(this.handleError);
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
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
