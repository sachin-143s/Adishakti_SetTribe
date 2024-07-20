import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astrologer-signup',
  templateUrl: './astrologer-signup.component.html',
  styleUrls: ['./astrologer-signup.component.css']
})
export class AstrologerSignupComponent implements OnInit {
  signupForm!: FormGroup;
  backEndUrl: string = 'http://localhost:8080/api/astrologers';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      aadharNumber: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      languagesKnown: new FormControl('', Validators.required),
      skills: new FormControl('', Validators.required),
      certification: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      ratePerMinute: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      pinCode: new FormControl('', Validators.required)
    });
  }

  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get mobile() { return this.signupForm.get('mobile'); }
  get dob() { return this.signupForm.get('dob'); }
  get gender() { return this.signupForm.get('gender'); }
  get aadharNumber() { return this.signupForm.get('aadharNumber'); }
  get experience() { return this.signupForm.get('experience'); }
  get languagesKnown() { return this.signupForm.get('languagesKnown'); }
  get skills() { return this.signupForm.get('skills'); }
  get certification() { return this.signupForm.get('certification'); }
  get degree() { return this.signupForm.get('degree'); }
  get ratePerMinute() { return this.signupForm.get('ratePerMinute'); }
  get city() { return this.signupForm.get('city'); }
  get district() { return this.signupForm.get('district'); }
  get state() { return this.signupForm.get('state'); }
  get country() { return this.signupForm.get('country'); }
  get pinCode() { return this.signupForm.get('pinCode'); }

  signup() {
    if (this.signupForm.invalid) {
      alert('Please fill all required fields with valid data.');
      return;
    }

    const signupData = {
      ...this.signupForm.value,
      languagesKnown: this.signupForm.value.languagesKnown.split(','), // Convert comma-separated string to array
      skills: this.signupForm.value.skills.split(',') // Convert comma-separated string to array
    };

    this.http.post(this.backEndUrl, signupData).subscribe(
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
  }
}
