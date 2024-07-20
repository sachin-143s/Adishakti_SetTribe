import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  categories = ['Technology', 'Health', 'Lifestyle', 'Education'];
  selectedCategory: string | null = null;
  selectedBlog: Blog | null = null;

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('category');
      const blogId = params.get('id');
      
      if (categoryId) {
        this.selectedCategory = categoryId;
        this.fetchBlogsByCategory(this.selectedCategory);
      } else if (blogId) {
        this.fetchBlogById(Number(blogId));
      } else {
        this.fetchBlogs();
      }
    });
  }

  fetchBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }

  fetchBlogsByCategory(category: string): void {
    this.blogService.getBlogsByCategory(category).subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }

  fetchBlogById(id: number): void {
    this.blogService.getBlogById(id).subscribe((data: Blog) => {
      this.selectedBlog = data;
    });
  }

  filterByCategory(category: string): void {
    this.selectedBlog = null;
    this.router.navigate(['/blogs/category', category]);
  }

  readMore(blogId: number): void {
    this.router.navigate(['/blogs', blogId]);
  }

  backToList(): void {
    this.selectedBlog = null;
    this.router.navigate(['/blogs']);
  }
}
