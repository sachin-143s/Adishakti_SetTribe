import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astro-profile',
  templateUrl: './astro-profile.component.html',
  styleUrl: './astro-profile.component.css'
})
export class AstroProfileComponent implements OnInit {
  user = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    bio: 'Lorem ipsum dolor sit amet.'
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(): void {
    // Handle profile update logic here
    console.log('Profile updated:', this.user);
  }

}
