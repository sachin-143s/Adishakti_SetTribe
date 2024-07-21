import { Component, OnInit } from '@angular/core';
import { AstrologerService } from '../astrologer.service';

@Component({
  selector: 'app-chat-with-astrologer',
  templateUrl: './chat-with-astrologer.component.html',
  styleUrls: ['./chat-with-astrologer.component.css']
})
export class ChatWithAstrologerComponent implements OnInit {
  astrologers: any[] = []; // Array of astrologers
  filteredAstrologers: any[] = [];
  filters = {
    skills: '',
    experience: ''
  };

  constructor(private astrologerService: AstrologerService) {}

  ngOnInit(): void {
    this.astrologerService.getAstrologers().subscribe(data => {
      this.astrologers = data;
      this.filteredAstrologers = data;
    });
  }

  applyFilters(): void {
    this.filteredAstrologers = this.astrologers.filter(astrologer =>
      (!this.filters.skills || astrologer.skills.includes(this.filters.skills)) &&
      (!this.filters.experience || astrologer.experience === this.filters.experience)
    );
  }

  viewAstrologerDetails(id: number): void {
    // Implement this method to view astrologer details
    console.log(`Viewing details for astrologer with ID: ${id}`);
  }

  initiateChat(id: number): void {
    // Implement this method to initiate a chat with the astrologer
    console.log(`Initiating chat with astrologer with ID: ${id}`);
  }

  initiateCall(id: number): void {
    // Implement this method to initiate a call with the astrologer
    console.log(`Initiating call with astrologer with ID: ${id}`);
  }
}
