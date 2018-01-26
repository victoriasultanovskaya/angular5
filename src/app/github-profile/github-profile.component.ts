import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('GithubProfileComponent OnInit');
        this.route.paramMap
            .subscribe(
                params => {
                    /*Plus before string converts string to number*/
                    let userId = +params.get('userId');
                    console.log(userId);
                });
    }

}
