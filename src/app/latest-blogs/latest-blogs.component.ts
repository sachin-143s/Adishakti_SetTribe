import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-blogs',
  templateUrl: './latest-blogs.component.html',
  styleUrls: ['./latest-blogs.component.css']
})
export class LatestBlogsComponent implements OnInit {
  blogs = [
    { id: 1, image: 'assets/blog1.jpg', title: 'Blog 1' },
    { id: 2, image: 'assets/blog2.jpg', title: 'Blog 2' },
    // Add more blogs
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  readMore(blogId: number): void {
    this.router.navigate(['/blog', blogId]);
  }
}
