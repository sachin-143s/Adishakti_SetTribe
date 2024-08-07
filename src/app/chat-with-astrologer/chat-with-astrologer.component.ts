import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Astrologer {
  firstName: string;
  lastName: string;
  mobile: string;
  ratePerMinute: number;
}

@Component({
  selector: 'app-chat-with-astrologer',
  templateUrl: './chat-with-astrologer.component.html',
  styleUrls: ['./chat-with-astrologer.component.css'],
})
export class ChatWithAstrologerComponent implements OnInit {
  astrologer: Astrologer | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.setCurrentDate();
    this.getAstrologerData();
  }

  setCurrentDate(): void {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = new Date().toLocaleDateString();
    }
  }

  getAstrologerData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Fetching data for astrologer with id:', id); // Debugging line
    if (id) {
      this.http
        .get<Astrologer>(`http://localhost:8080/api/astrologers/${id}`)
        .subscribe(
          (data) => {
            console.log('Astrologer data received:', data); // Debugging line
            this.astrologer = data;
          },
          (error) => {
            console.error('Error fetching astrologer data', error);
          }
        );
    }
  }
}
