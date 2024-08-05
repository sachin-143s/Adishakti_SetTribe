import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-with-astrologer',
  templateUrl: './call-with-astrologer.component.html',
  styleUrls: ['./call-with-astrologer.component.css']
})
export class CallWithAstrologerComponent implements OnInit {

  ngOnInit(): void {
    this.setCurrentDate();
  }

  setCurrentDate(): void {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = new Date().toLocaleDateString();
    }
  }
}
