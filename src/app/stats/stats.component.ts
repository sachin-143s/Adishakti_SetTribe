import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: { totalAstrologers: number; minutesConsulted: number; happyCustomers: number } = {
    totalAstrologers: 10,
    minutesConsulted: 500,
    happyCustomers: 1000
  };

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe(data => {
      this.stats.totalAstrologers = data.totalAstrologers;
      this.stats.minutesConsulted = data.minutesConsulted;
      this.stats.happyCustomers = data.happyCustomers;
    });
  }
}
