import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  showDropdown = false;
  currentTab = ''; 

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    
    this.isLoggedIn = false;
    this.showDropdown = false; 
   
  }

  setActiveTab(tabName: string) {
    this.currentTab = tabName;
  }

  closeDropdown() {
    this.showDropdown = false;
  }
}
