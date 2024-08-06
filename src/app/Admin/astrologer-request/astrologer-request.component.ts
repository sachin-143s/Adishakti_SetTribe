import { Component, OnInit } from '@angular/core';
import { AstrologerService } from '../../astrologer.service';

@Component({
  selector: 'app-astrologer-request',
  templateUrl: './astrologer-request.component.html',
  styleUrl: './astrologer-request.component.css'
})
export class AstrologerRequestComponent implements OnInit {
  astrologers: any[] = [];
  filteredAstrologers: any[] = [];
  searchQuery: string = '';

  constructor(private astrologerService: AstrologerService) { }

  ngOnInit(): void {
    this.loadAstrologerRequests();
  }

  loadAstrologerRequests(): void {
    this.astrologerService.getAstrologers().subscribe(
      (data: any[]) => {
        this.astrologers = data;
        this.filteredAstrologers = data;
      },
      (error: any) => console.error('Error fetching astrologers:',error)
    );
  }

  acceptRequest(id: number): void {
    alert(id + "Accepted");
    this.astrologerService.updateAstrologerStatus(id, 'accepted').subscribe(
      () => this.loadAstrologerRequests(),
      (error) => console.error('Error updating astrologer status:',error)
    );
  }

  rejectRequest(id: number): void {
    alert(id + "Rejected");
    this.astrologerService.updateAstrologerStatus(id, 'rejected').subscribe(
      () => this.loadAstrologerRequests(),
      (error) => console.error('Error updating astrologer status:',error)
    );
  }

  searchAstrologers(): void {
    if (this.searchQuery) {
      this.filteredAstrologers = this.astrologers.filter(astrologer =>
        astrologer.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        astrologer.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        astrologer.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        astrologer.mobile.includes(this.searchQuery)
      );
    } else {
      this.filteredAstrologers = this.astrologers;
    }
  }
}