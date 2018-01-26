import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts = [
      {year: '2017', month: '01'},
      {year: '2017', month: '02'},
      {year: '2017', month: '03'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
