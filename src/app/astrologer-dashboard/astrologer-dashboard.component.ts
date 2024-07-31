import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-astrologer-dashboard',
  templateUrl: './astrologer-dashboard.component.html',
  styleUrls: ['./astrologer-dashboard.component.css']
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
      hours: this.workingHours
    });
  }

  // Revenue chart configuration
  public revenueChartType: ChartType = 'bar';
  public revenueChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Revenue',
        data: [500, 700, 800, 400, 900, 1000, 1200],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }
    ]
  };
  public revenueChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };
}
