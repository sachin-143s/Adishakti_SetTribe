import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  showDropdown = false;
  currentTab = ''; 

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.showDropdown = false;
    }
  }

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
