// signup.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    city: '',
    district: '',
    state: '',
    country: '',
    pinCode: '',
    mobileNumber: '',
    gender: '',
    birthPlace: '',
    birthTime: ''
  };

  constructor(private http: HttpClient) {}

  signup() {
    const signupUrl = 'http://localhost:8080/api/users'; 

    this.http.post(signupUrl, this.signupForm).subscribe(
      (response: any) => {
        console.log('Signup successful:', response);
        
      },
      (error) => {
        console.error('Signup failed:', error);
      }
    );
  }
}
