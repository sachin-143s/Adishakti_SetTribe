import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call-with-astrologer',
  templateUrl: './call-with-astrologer.component.html',
  styleUrls: ['./call-with-astrologer.component.css']
})
export class CallWithAstrologerComponent implements OnInit {
  astrologerName: string = '';
  isAvailable: boolean = false; // Default value

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setCurrentDate();
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.getAstrologerById(id);
    });
  }

  setCurrentDate(): void {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-GB'); // Format date as dd/mm/yyyy
      dateElement.textContent = formattedDate;
    }
  }

  getAstrologerById(id: number): void {
    // Example data; replace with actual service call
    const astrologers = [
      { id: 1, name: 'Dr. Anita Rai', available: true },
      { id: 2, name: 'Shri Ashok Shukla', available: false },
      { id: 3, name: 'Dr. Priya Sharma', available: true },
      { id: 4, name: 'Shri Rajesh Gupta', available: false },
      { id: 5, name: 'Dr. Suman Verma', available: true },
      { id: 6, name: 'Shri Rakesh Singh', available: false },
      { id: 7, name: 'Dr. Kavita Gupta', available: true },
      { id: 8, name: 'Shri Ankit Mishra', available: false },
      { id: 9, name: 'Dr. Radha Kapoor', available: true }
    ];
    
    const astrologer = astrologers.find(a => a.id === id);
    if (astrologer) {
      this.astrologerName = astrologer.name;
      this.isAvailable = astrologer.available;
    } else {
      this.astrologerName = 'Unknown'; // Default value if not found
      this.isAvailable = false; // Default value if not found
    }
  }
}
