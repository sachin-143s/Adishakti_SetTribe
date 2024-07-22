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

  showPassword: boolean = false;  

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }

  validateCredentials() {
    this.errorMessage = '';
    
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    this.http.get<User>(`${this.apiUrl}api/users/email/${this.email}`).subscribe(
      user => {
        if (user) {
          if (user.password === this.password) {
            
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.user = user; 
            this.router.navigateByUrl("/find-astrologers");
          } else {
            this.errorMessage = 'Password does not match.';
          }
        } else {
          this.errorMessage = 'User with this email not found.';
        }
      },
      error => {
        console.error('Error fetching user:', error);
        this.errorMessage = 'Error fetching user data.';
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
