import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface User {
  id: number;
  email: string;
  password: string;
}
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  apiUrl = 'http://localhost:8080/api/users/';
  editForm: FormGroup;
  editMode: boolean = false;
  selectedUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.editForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<User[]>(`${this.apiUrl}`).subscribe(
      data => {
        this.users = data;
        this.filteredUsers = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  editUser(user: User) {
    this.selectedUser = user;
    this.editForm.setValue({
      email: user.email,
      password: user.password
    });
    this.editMode = true;
  }

  deleteUser(id: number) {
    this.http.delete(`${this.apiUrl}${id}`).subscribe(
      () => {
        this.getUsers();
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }

  updateUser() {
    if (this.selectedUser) {
      const updatedUser = {
        ...this.selectedUser,
        email: this.editForm.value.email,
        password: this.editForm.value.password
      };

      this.http.put(`${this.apiUrl}${this.selectedUser.id}`, updatedUser).subscribe(
        () => {
          this.getUsers();
          this.editMode = false;
          this.selectedUser = null;
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  searchUsers() {
    if (this.searchQuery) {
      this.filteredUsers = this.users.filter(user =>
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }
}