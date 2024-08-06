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
  acceptBlog(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/accept/${id}`, {});
  }

  rejectBlog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reject/${id}`);
  }

  getPendingBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/pending`);
  }

  searchBlogs(term: string): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/search?term=${term}`);
  }
}
// // dummy data 
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

// export interface Blog {
//   id: number;
//   title: string;
//   featuredImage: string;
//   content: string;
//   astrologer: {
//     name: string;
//   };
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class BlogService {
//   private apiUrl = 'http://localhost:8080/api/blogs';

//   private dummyBlogs: Blog[] = [
//     {
//       id: 1,
//       title: "Astrology and You",
//       featuredImage: "image1.jpg",
//       content: "This is a blog about astrology.",
//       astrologer: {
//         name: "John Doe"
//       }
//     },
//     {
//       id: 2,
//       title: "The Stars and Your Future",
//       featuredImage: "image2.jpg",
//       content: "Exploring the impact of stars on your future.",
//       astrologer: {
//         name: "Jane Smith"
//       }
//     },
//     {
//       id: 3,
//       title: "Understanding Your Zodiac",
//       featuredImage: "image3.jpg",
//       content: "A deep dive into zodiac signs.",
//       astrologer: {
//         name: "Emily Johnson"
//       }
//     }
//   ];

//   constructor(private http: HttpClient) {}

//   getBlogs(): Observable<Blog[]> {
//     return of(this.dummyBlogs);
//   }

//   getBlogsByCategory(category: string): Observable<Blog[]> {
//     return of(this.dummyBlogs.filter(blog => blog.title.toLowerCase().includes(category.toLowerCase())));
//   }

//   getBlogById(id: number): Observable<Blog> {
//     return of(this.dummyBlogs.find(blog => blog.id === id) as Blog);
//   }

//   acceptBlog(id: number): Observable<any> {
//     return of({ message: 'Blog accepted' });
//   }

//   rejectBlog(id: number): Observable<any> {
//     return of({ message: 'Blog rejected' });
//   }

//   getPendingBlogs(): Observable<Blog[]> {
//     return of(this.dummyBlogs.filter(blog => !blog.content));
//   }
//   // getPendingBlogs(): Observable<Blog[]> {
//   //   const pendingBlogs = this.dummyBlogs.filter(blog => !blog.content);
//   //   console.log('Pending Blogs:', pendingBlogs); // Add this line
//   //   return of(pendingBlogs);
//   // }
  

//   searchBlogs(term: string): Observable<Blog[]> {
//     return of(this.dummyBlogs.filter(blog => blog.title.toLowerCase().includes(term.toLowerCase())));
//   }
// }
