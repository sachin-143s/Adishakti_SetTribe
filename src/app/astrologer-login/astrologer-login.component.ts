import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
interface Astro {
  email: string;
  password: string;
}
@Component({
  selector: 'app-astrologer-login',
  templateUrl: './astrologer-login.component.html',
  styleUrl: './astrologer-login.component.css'
})
export class AstrologerLoginComponent implements OnInit {
  email: string = '';
  password: string = 'Password Required*';
  user: Astro | null = null;
  errorMessage: string = '';
  errorUser: string = ""
  userReq: string = "Email or phone Number Required*"
  errorPassword: string = ""
  errMass: boolean = false
  showPassword: boolean = false;

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }
  myData: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  get getuser(): any {
    return this.myData.get('user')
  }
  get getpass(): any {
    return this.myData.get('password')
  }
  validateCredentials() {
    this.errMass = !this.errMass
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    this.http.get<Astro>(`${this.apiUrl}/api/astrologers/email/${this.email}`).subscribe(
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
  isEmail(str: string): boolean {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(str);
  }
  ngOnInit() {
    this.myData.get('user')?.valueChanges.subscribe(value => {
      if (!isNaN(Number(value.substr(0, 1)))) {
        this.myData.get('user')?.setValidators([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])
        if (this.myData.get('user')?.hasError('pattern')) {
          this.errorUser = "Enter Only Numbers*"
        }
        else if (this.myData.get('user')?.hasError('minlength')) {
          this.errorUser = "Enter Atlist 10 number*"
        }
        else if (this.myData.get('user')?.hasError('maxlength')) {
          this.errorUser = "Enter Onliy 10 number*"
        }
        else {
          this.errorUser = ""
        }
      }
      else if (!this.isEmail(value)) {
        this.myData.get('user')?.setValidators([Validators.required, Validators.email])

        if (this.myData.get('user')?.hasError('email')) {
          this.errorUser = "Enter Valid Email Id*"
        }
        else {
          this.errorUser = ""
        }
      }
      else if (this.isEmail(value)) {
        this.errorUser = ""
      }
    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

