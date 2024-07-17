import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated-astrologers',
  templateUrl: './top-rated-astrologers.component.html',
  styleUrls: ['./top-rated-astrologers.component.css']
})
export class TopRatedAstrologersComponent implements OnInit {
  astrologers = [
    { image: 'assets/astrologer1.jpg', name: 'Astrologer 1', skills: 'Vedic Astrology' },
    { image: 'assets/astrologer2.jpg', name: 'Astrologer 2', skills: 'Palmistry' },
    
  ];

  constructor() { }

  ngOnInit(): void { }
}
