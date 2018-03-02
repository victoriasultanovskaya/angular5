import {Injectable} from '@angular/core';
import {NotFoundError} from '../common/errors/not-found-error';
import {BadRequestError} from '../common/errors/bad-request-error';
import {AppError} from '../common/errors/app-error';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

    constructor(private url: string, private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url)
            .map(response => response)
            .catch(this.handleError);
    }

    get(id) {
        return this.http.get(this.url + '/' + id)
            .map(response => response)
            .catch(this.handleError);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response)
            .catch(this.handleError);
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
            .map(response => response)
            .catch(this.handleError);
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadRequestError(error.json()));
        }

        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }

        return Observable.throw(new AppError(error));
    }

}
