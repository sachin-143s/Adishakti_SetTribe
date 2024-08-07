import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  totalAmount: number | null = null;
  astrologerMobile: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.totalAmount = +params['amount'] || null; // Convert string to number
      this.astrologerMobile = params['mobile'] || null; // Retrieve mobile number
    });
  }
}
