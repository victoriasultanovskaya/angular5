import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import {NotFoundError} from '../common/errors/not-found-error';
import {BadRequestError} from '../common/errors/bad-request-error';
import {AppError} from '../common/errors/app-error';

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) {
    }

    /**
     * @returns {Observable<any>}
     */
    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource) {
        //return Observable.throw(new AppError()); /* Simulate error */
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
            .map(response => response.json())
            .catch(this.handleError);
    }

    delete(id) {
        //return Observable.throw(new AppError()); /* Simulate error */
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .toPromise()
            //.retry(3)
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
