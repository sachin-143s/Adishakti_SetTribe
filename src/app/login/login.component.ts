import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: User | null = null;
  errorMessage: string = '';

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }

  validateCredentials() {
    this.errorMessage = '';
    this.http.get<User>(this.apiUrl + "api/users/email/" + this.email).subscribe(
      success => {
        this.user = success;
        if (this.user) {
          if (this.user.password === this.password) {
            // Store user data in localStorage
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.router.navigateByUrl("/");
          } else {
            this.errorMessage = 'Password does not match.';
          }
        } else {
          this.errorMessage = 'user with this email not found.';
        }
      },
      error => {
        console.error('Error fetching user:', error);
        this.errorMessage = 'Error fetching user data.';
      }
    );
  }
}
