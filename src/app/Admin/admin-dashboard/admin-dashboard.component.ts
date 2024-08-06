import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  totalClients: number = 100; // Example value
  totalAstrologers: number = 10000; // Example value
}

