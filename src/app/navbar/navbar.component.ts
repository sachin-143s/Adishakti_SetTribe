import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  showDropdown = false;
  

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    // Implement logout functionality as needed
    this.isLoggedIn = false;
  }
}
