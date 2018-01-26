import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
    year: number;
    month: number;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        let params = this.route.snapshot.paramMap;
        this.year = +params.get('year');
        this.month = +params.get('month');
    }

    viewAll() {
        this.router.navigate(['/blog']);
    }

}
