import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  backEndUrl: string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      dob: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      gender: new FormControl('', Validators.required),
      birthPlace: new FormControl('', Validators.required),
      birthTime: new FormControl('', Validators.required)
    });
  }

  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get mobileNumber() { return this.signupForm.get('mobileNumber'); }

  signup() {
    if (this.signupForm.invalid) {
      if (this.firstName?.errors?.['required']) {
        alert('First Name is required');
      }
      if (this.lastName?.errors?.['required']) {
        alert('Last Name is required');
      }
      if (this.email?.errors?.['required'] || this.email?.errors?.['email']) {
        alert('Email is required and must be in a valid format');
      }
      if (this.password?.errors?.['minlength']) {
        alert('Password should be at least 8 characters long');
      } else if (this.password?.errors?.['required']) {
        alert('Password is required');
      }
      if (this.mobileNumber?.errors?.['pattern']) {
        alert('Mobile Number must be numeric and 10 digits long');
      } else if (this.mobileNumber?.errors?.['required']) {
        alert('Mobile Number is required');
      }
    } else {
      this.http.post(this.backEndUrl, this.signupForm.value).subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          alert('Signup successful');
          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Signup failed:', error);
          alert('Signup failed');
        }
      );
      this.router.navigate(['/login']);
    }

  }
}
