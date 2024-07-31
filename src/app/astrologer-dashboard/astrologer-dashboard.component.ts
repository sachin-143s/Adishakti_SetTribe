import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-astrologer-dashboard',
  templateUrl: './astrologer-dashboard.component.html',
  styleUrls: ['./astrologer-dashboard.component.css'],
})
export class AstrologerDashboardComponent {
  totalClients: number = 100; // Example value
  reviewsCount: number = 50; // Example value
  totalRevenue: number = 10000; // Example value
  ratingsCount: number = 200; // Example value

  availabilityStatus: string = 'available';
  consultationRates: number = 100; // Example value
  workingHours: string = '9 AM - 5 PM'; // Example value

  updateAvailability() {
    // Logic to update availability status, consultation rates, and working hours
    console.log('Availability Updated:', {
      status: this.availabilityStatus,
      rates: this.consultationRates,
      hours: this.workingHours,
    });
  }
}
