 import { Component, OnInit } from '@angular/core';

interface Astrologer {
  name: string;
  skills: string;
  image: string;
}

@Component({
  selector: 'app-find-astrologers',
  templateUrl: './find-astrologers.component.html',
  styleUrls: ['./find-astrologers.component.css']
})
export class FindAstrologersComponent implements OnInit {
  astrologers: Astrologer[] = [
    { name: 'Dr. Anita Rai', skills: 'Vedic Astrology, Numerology', image: 'assets/astrologer1.jpg' },
    { name: 'Shri Ashok Shukla', skills: 'Tarot Reading, Vastu Shastra', image: 'assets/astrologer2.jpg' },
    { name: 'Dr. Priya Sharma', skills: 'Vedic Astrology, Palmistry', image: 'assets/astrologer3.jpg' },
    { name: 'Shri Rajesh Gupta', skills: 'Western Astrology, Feng Shui', image: 'assets/astrologer4.jpg' },
    { name: 'Dr. Suman Verma', skills: 'Vedic Astrology, Tarot Reading', image: 'assets/astrologer5.jpg' },
    { name: 'Shri Rakesh Singh', skills: 'Numerology, Palmistry', image: 'assets/astrologer6.jpg' },
    { name: 'Dr. Kavita Gupta', skills: 'Tarot Reading, Vastu Shastra', image: 'assets/astrologer7.jpg' },
    { name: 'Shri Ankit Mishra', skills: 'Astrology, Western Astrology', image: 'assets/astrologer8.jpg' },
    { name: 'Dr. Radha Kapoor', skills: 'Vedic Astrology, Numerology', image: 'assets/astrologer9.jpg' },
    { name: 'Shri Mohan Das', skills: 'Feng Shui, Palmistry', image: 'assets/astrologer10.jpg' }
  ];

  filteredAstrologers: Astrologer[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    // Initialize with all astrologers
    this.filteredAstrologers = this.astrologers;
  }

  filterAstrologers(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();

    if (searchTerm === '') {
      this.filteredAstrologers = this.astrologers;
      return;
    }

    this.filteredAstrologers = this.astrologers.filter(astrologer =>
      astrologer.name.toLowerCase().includes(searchTerm) ||
      astrologer.skills.toLowerCase().includes(searchTerm)
    );
  }
}
 





