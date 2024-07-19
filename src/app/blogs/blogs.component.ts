import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }

  readMore(blogId: number): void {
    this.router.navigate(['/blog', blogId]);
  }
}
