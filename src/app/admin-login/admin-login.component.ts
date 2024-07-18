import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Admin {
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  
  email: string = '';
  password: string = '';
  user: Admin | null = null;
  errorMessage: string = '';

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }

  validateCredentials() {
    this.errorMessage = '';
    this.http.get<Admin>(this.apiUrl + "api/admins/email/" + this.email).subscribe(
      success => {
        this.user = success;
        if (this.user) {
          if (this.user.password === this.password) {
            // Store Admin data in localStorage
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
    this.router.navigate(['/login']);
  
  }


}
