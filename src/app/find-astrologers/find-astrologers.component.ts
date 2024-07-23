import { Component, OnInit } from '@angular/core';

interface Astrologer {
  id: number;
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
    { id: 1, name: 'Dr. Anita Rai', skills: 'Vedic Astrology, Numerology', image: 'images/content/about/astro_img1.jpg' },
    { id: 2, name: 'Shri Ashok Shukla', skills: 'Tarot Reading, Vastu Shastra', image: 'images/content/about/astro_img3.jpg' },
    { id: 3, name: 'Dr. Priya Sharma', skills: 'Vedic Astrology, Palmistry', image: 'images/content/about/astro_img2.jpg' },
    { id: 4, name: 'Shri Rajesh Gupta', skills: 'Western Astrology, Feng Shui', image: 'images/content/about/astro_img4.jpg' },
    { id: 5, name: 'Dr. Suman Verma', skills: 'Vedic Astrology, Tarot Reading', image: 'images/content/about/astro_img1.jpg' },
    { id: 6, name: 'Shri Rakesh Singh', skills: 'Numerology, Palmistry, tarot reading', image: 'images/content/about/astro_img3.jpg' },
    { id: 7, name: 'Dr. Kavita Gupta', skills: 'Tarot Reading, Vastu Shastra', image: 'images/content/about/astro_img2.jpg' },
    { id: 8, name: 'Shri Ankit Mishra', skills: 'Astrology, Western Astrology', image: 'images/content/about/astro_img4.jpg' },
    { id: 9, name: 'Dr. Radha Kapoor', skills: 'Vedic Astrology, Numerology', image: 'images/content/about/astro_img1.jpg' }
  ];

  filteredAstrologers: Astrologer[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
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

  chatWithAstrologer(id: number): void {
    console.log(`Chat with astrologer ID: ${id}`);
    // Implement chat functionality here
  }

  callAstrologer(id: number): void {
    console.log(`Call astrologer ID: ${id}`);
    // Implement call functionality here
  }
}

 

//fetch astrologer using db
/* import { Component, OnInit } from '@angular/core';
import { AstrologerService,Astrologer } from '../astrologer.service';

@Component({
  selector: 'app-find-astrologers',
  templateUrl: './find-astrologers.component.html',
  styleUrls: ['./find-astrologers.component.css']
})
export class FindAstrologersComponent implements OnInit {
  astrologers: Astrologer[] = [];
  filteredAstrologers: Astrologer[] = [];
  searchTerm: string = '';

  constructor(private astrologerService: AstrologerService) {}

  ngOnInit(): void {
    this.loadAstrologers();
  }

  loadAstrologers(): void {
    this.astrologerService.getAstrologers().subscribe(
      (data) => {
        this.astrologers = data;
        this.filteredAstrologers = data;
      },
      (error) => {
        console.error('Error fetching astrologers', error);
      }
    );
  }

  filterAstrologers(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();

    if (searchTerm === '') {
      this.filteredAstrologers = this.astrologers;
      return;
    }

    this.filteredAstrologers = this.astrologers.filter(astrologer =>
      (`${astrologer.firstName} ${astrologer.lastName}`.toLowerCase().includes(searchTerm) ||
      astrologer.skills.join(', ').toLowerCase().includes(searchTerm))
    );
  }
}
 */