import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  email: string;
  password: string;  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  user: User | null = null; 
  errorMessage: string = '';
  errorUser:string=""
  errorPassword:string=""
  showPassword: boolean = false;  

  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }
  myData:FormGroup =new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  })
  get getuser():any{
    return this.myData.get('user')
  }
  get getpass():any{
    return this.myData.get('password')
  }
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
  isEmail(str:string):boolean {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(str);
  }
  ngOnInit() {
    this.myData.get('user')?.valueChanges.subscribe(value=>{
      if(!isNaN(Number(value.substr(0,1)))){
        this.myData.get('user')?.setValidators([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')])
        if(this.myData.get('user')?.hasError('pattern'))
        {
          this.errorUser="Enter Only Numbers"
        }
        else if(this.myData.get('user')?.hasError('minlength'))
        {
            this.errorUser="Enter Atlist 10 number"
        }
        else if(this.myData.get('user')?.hasError('maxlength'))
        {
            this.errorUser="Enter Onliy 10 number"
        }
        else{
        this.errorUser=""
        }
      }
      else if(!this.isEmail(value)){
        this.myData.get('user')?.setValidators([Validators.required,Validators.email])
       
          if(this.myData.get('user')?.hasError('email'))
          {
            this.errorUser="Enter Valid Email Id"
          }
          else{
          this.errorUser=""
          }
      }
      else if(this.isEmail(value)){
        this.errorUser=""
      }
    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
