import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-rated-astrologers',
  templateUrl: './top-rated-astrologers.component.html',
  styleUrls: ['./top-rated-astrologers.component.css']
})
export class TopRatedAstrologersComponent implements OnInit {
  astrologers: any[] = [];  
  currentIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAstrologers();
  }

  fetchAstrologers(): void {
    this.http.get<any[]>('http://localhost:8080/api/astrologers')
      .subscribe(data => {
        this.astrologers = data;
        this.updateSlider(); 
      });
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.astrologers.length - 4) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  updateSlider(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      slider.style.transform = `translateX(-${this.currentIndex * 25}%)`;
    }
  }
}
