import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: ''
  };
  showPassword = false; // Initialize showPassword property

  constructor(private http: HttpClient) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const loginUrl = 'http://localhost:8080/api/astrologers/login';

    const body = {
      email: this.loginForm.email,
      password: this.loginForm.password
    };

    this.http.post(loginUrl, body).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        this.loginForm = { email: '', password: '' }; 
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
