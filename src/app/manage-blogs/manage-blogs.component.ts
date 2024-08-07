import { Component, OnInit } from '@angular/core';
import { Blog, BlogService } from '../blog.service';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  searchTerm: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs.filter(blog => blog.astrologer !== undefined); // Ensure astrologer is defined
      this.filteredBlogs = [...this.blogs];
    });
  }

  searchBlogs(): void {
    if (this.searchTerm.trim()) {
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredBlogs = [...this.blogs];
    }
  }

  approveBlog(blog: Blog): void {
    this.blogService.approveBlog(blog.id).subscribe(() => {
      console.log('Blog approved:', blog.title);
      this.fetchBlogs(); // Refresh the list after approval
    });
  }
  
  rejectBlog(blog: Blog): void {
    this.blogService.rejectBlog(blog.id).subscribe(() => {
      console.log('Blog rejected:', blog.title);
      this.fetchBlogs(); // Refresh the list after rejection
    });
  }
  
}
