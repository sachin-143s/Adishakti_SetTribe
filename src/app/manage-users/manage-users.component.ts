import { Component } from '@angular/core';
interface User {
 id: string;
 name: string;
 email: string;
}
@Component({
 selector: 'app-manage-users',
 templateUrl: './manage-users.component.html',
 styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {
//   users: User[] = [
//     { id: 1, name: 'John Doe', email: 'john@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
//   ];
//    // User management methods
//    addUser(): void {
//     // Logic to add a new user
//     const newUser: User = { id: this.users.length + 1, name: 'New User', email: 'new@example.com' };
//     this.users.push(newUser);
//   }

//   editUser(user: User): void {
//     // Logic to edit a user
//     const index = this.users.findIndex(u => u.id === user.id);
//     if (index !== -1) {
//       this.users[index] = { ...user, name: 'Updated User' }; // Example update
//     }
//   }

//   deleteUser(userId: number): void {
//     // Logic to delete a user
//     this.users = this.users.filter(user => user.id !== userId);
//   }
// }



//export class UserManagementComponent {
 users: User[] = [];
 isEditable: boolean[] = [];
 isNewUser: boolean = false;
 newUser: User = { id: '', name: '', email: '' };

 addUser() {
   this.isNewUser = true;
 }

 toggleEdit(index: number) {
   this.isEditable[index] = !this.isEditable[index];
 }

 deleteUser(index: number) {
   this.users.splice(index, 1);
   this.isEditable.splice(index, 1);
 }

 saveUser(user: User) {
   const index = this.users.findIndex(u => u.id === user.id);
   if (index !== -1) {
     this.users[index] = { ...user };
     this.isEditable[index] = false;
   }
 }

 saveNewUser() {
   if (this.newUser.id && this.newUser.name && this.newUser.email) {
     this.users.push({ ...this.newUser });
     this.isEditable.push(false);
     this.isNewUser = false;
     this.newUser = { id: '', name: '', email: '' };
   }
 }

 cancelNewUser() {
   this.isNewUser = false;
   this.newUser = { id: '', name: '', email: '' };
 }
}