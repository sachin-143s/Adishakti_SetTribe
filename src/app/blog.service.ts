import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  featuredImage: string;
  content: string;
  astrologer: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getBlogsByCategory(category: string): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/category/${category}`);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }
}
