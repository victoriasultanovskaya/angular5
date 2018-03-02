import {Component, OnInit} from '@angular/core';
import {GithubFollowersService} from '../services/github-followers/github-followers.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
    followers: any;

    constructor(private service: GithubFollowersService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        /**
         * In order to Subscribe to Multiple Observables
         * Instead of having two subscriptions to two Observables
         * we nee to combine two observables to a new observable
         * and then we'll subscribe to that combined observable
         * @see angular5\src\assets\Subscribing_to_Multiple_Observables.png
         */
        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(
                combined => {
                    /**
                     * combined[0] same as this.route.paramMap
                     * combined[1] same as this.route.queryParamMap
                     */
                    const userId = +combined[0].get('userId');
                    const page = +combined[1].get('page');

                    // this.service.getAll({id: userId, page: page})
                    //     .subscribe(followers => this.followers = followers);

                    return this.service.getAll();
                }
            )
            .subscribe(
                followers => this.followers = followers
            );
    }
}
