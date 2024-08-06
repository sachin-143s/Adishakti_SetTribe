import { Component, OnInit } from '@angular/core';
import { Blog, BlogService } from '../../blog.service';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrl: './manage-blog.component.css'
})
export class ManageBlogComponent implements OnInit {
  pendingBlogs: Blog[] = [];
  searchTerm: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchPendingBlogs();
  }


  fetchPendingBlogs(): void {
    this.blogService.getPendingBlogs().subscribe((data: Blog[]) => {
      this.pendingBlogs = data;
    });
  }

  acceptBlog(blog: Blog): void {
    this.blogService.acceptBlog(blog.id).subscribe(() => {
      this.pendingBlogs = this.pendingBlogs.filter(b => b.id !== blog.id);
    });
  }

  rejectBlog(blog: Blog): void {
    this.blogService.rejectBlog(blog.id).subscribe(() => {
      this.pendingBlogs = this.pendingBlogs.filter(b => b.id !== blog.id);
    });
  }

  searchBlogs(): void {
    if (this.searchTerm.trim()) {
      this.blogService.searchBlogs(this.searchTerm).subscribe((data: Blog[]) => {
        this.pendingBlogs = data;
      });
    } else {
      this.fetchPendingBlogs();
    }
  }
}
