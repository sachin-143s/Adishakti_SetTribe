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
 static homeClick:any=true
  static blogClick:boolean=false
  static findAistro:boolean=false
NavbarComponent: any;
   onClickHome(){
 
    NavbarComponent.homeClick=true
    NavbarComponent.blogClick=false
    NavbarComponent.findAistro=false
  }
  onClickBlog(){
    NavbarComponent.homeClick=false
    NavbarComponent.blogClick=true
    NavbarComponent.findAistro=false
  }
  onClickfindAistro(){
    NavbarComponent.homeClick=false
    NavbarComponent.blogClick=false
    NavbarComponent.findAistro=true
  }
  active:boolean=false
  
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
