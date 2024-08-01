import { Component, OnInit } from '@angular/core';

interface Astrologer {
  id: number;
  name: string;
  skills: string;
  image: string;
  rating: number; // Add rating property
}
@Component({
  selector: 'app-adminastrologer',
  templateUrl: './adminastrologer.component.html',
  styleUrl: './adminastrologer.component.css'
})
export class AdminastrologerComponent implements OnInit {
  astrologers: Astrologer[] = [
    { id: 1, name: 'Dr. Anita Rai', skills: 'Vedic Astrology, Numerology', image: 'images/content/about/astro_img1.jpg', rating: 4.5 },
    { id: 2, name: 'Shri Ashok Shukla', skills: 'Tarot Reading, Vastu Shastra', image: 'images/content/about/astro_img3.jpg', rating: 4.0 },
    { id: 3, name: 'Dr. Priya Sharma', skills: 'Vedic Astrology, Palmistry', image: 'images/content/about/astro_img2.jpg', rating: 3.5 },
    { id: 4, name: 'Shri Rajesh Gupta', skills: 'Western Astrology, Feng Shui', image: 'images/content/about/astro_img4.jpg', rating: 4.8 },
    { id: 5, name: 'Dr. Suman Verma', skills: 'Vedic Astrology, Tarot Reading', image: 'images/content/about/astro_img1.jpg', rating: 4.1 },
    { id: 6, name: 'Shri Rakesh Singh', skills: 'Numerology, Palmistry, Tarot Reading', image: 'images/content/about/astro_img3.jpg', rating: 3.8 },
    { id: 7, name: 'Dr. Kavita Gupta', skills: 'Tarot Reading, Vastu Shastra', image: 'images/content/about/astro_img2.jpg', rating: 4.2 },
    { id: 8, name: 'Shri Ankit Mishra', skills: 'Astrology, Western Astrology', image: 'images/content/about/astro_img4.jpg', rating: 3.9 },
    { id: 9, name: 'Dr. Radha Kapoor', skills: 'Vedic Astrology, Numerology', image: 'images/content/about/astro_img1.jpg', rating: 4.7 }
  ];

  filteredAstrologers: Astrologer[] = [];
  searchTerm: string = '';
  hoverRating: number | null = null;

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

  editAstrologer(astrologer: Astrologer): void {
    const newName = prompt("Enter new name:", astrologer.name);
    if (newName === null) return;

    const newSkills = prompt("Enter new skills:", astrologer.skills);
    if (newSkills === null) return;

    const newRatingStr = prompt("Enter new rating:", astrologer.rating.toString());
    if (newRatingStr === null) return;

    const newRating = parseFloat(newRatingStr);
    if (!isNaN(newRating)) {
      astrologer.name = newName;
      astrologer.skills = newSkills;
      astrologer.rating = newRating;
    }
  }

  deleteAstrologer(id: number): void {
    if (confirm("Are you sure you want to delete this astrologer?")) {
      this.astrologers = this.astrologers.filter(astrologer => astrologer.id !== id);
      this.filterAstrologers();
    }
  }
}