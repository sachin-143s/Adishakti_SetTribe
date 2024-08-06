import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  isEditable: boolean[] = [];
  isNewUser: boolean = false;
  newUser: User = { id: '', name: '', email: '' };
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = data;
      this.isEditable = new Array(this.users.length).fill(false);
    });
  }

  addUser() {
    this.isNewUser = true;
  }

  toggleEdit(index: number) {
    this.isEditable[index] = !this.isEditable[index];
  }

  deleteUser(index: number) {
    const userId = this.users[index].id;
    this.userService.deleteUser(userId).subscribe(() => {
      this.users.splice(index, 1);
      this.filteredUsers.splice(index, 1);
      this.isEditable.splice(index, 1);
    });
  }

  saveUser(user: User) {
    this.userService.updateUser(user).subscribe(() => {
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users[index] = { ...user };
        this.filteredUsers[index] = { ...user };
        this.isEditable[index] = false;
      }
    });
  }

  saveNewUser() {
    if (this.newUser.id && this.newUser.name && this.newUser.email) {
      this.userService.createUser(this.newUser).subscribe((user: User) => {
        this.users.push(user);
        this.filteredUsers.push(user);
        this.isEditable.push(false);
        this.isNewUser = false;
        this.newUser = { id: '', name: '', email: '' };
      });
    }
  }

  cancelNewUser() {
    this.isNewUser = false;
    this.newUser = { id: '', name: '', email: '' };
  }

  searchUsers() {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
}
