import {Component, OnInit} from '@angular/core';
import {GithubFollowersService} from '../services/github-followers/github-followers.service';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Component({
    selector: 'github-followers',
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
            .subscribe(combined => {
                console.log(combined);
                let userId = +combined[0].get('userId');
                console.log(userId);

                /**
                 * combined[0] same as this.route.paramMap
                 * combined[1] same as this.route.queryParamMap
                 */
                let page = +combined[1].get('page');
                console.log(page);

                // this.service.getAll({id: userId, page: page})
                //     .subscribe(followers => this.followers = followers);

                this.service.getAll()
                    .subscribe(followers => this.followers = followers);
            });


    }
}
