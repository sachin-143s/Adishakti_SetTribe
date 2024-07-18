import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  services = [
    { title: 'Career', image: 'career.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Pregnancy', image: 'pregnancy.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Marriage', image: 'marriage.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Health', image: 'health.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Love and Relationships', image: 'love.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Finance', image: 'finance.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Education', image: 'education.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' },
    { title: 'Spirituality', image: 'spirituality.jpg', description: 'Proin gravida nibh vel velit auctor aliquet. Aenean .' }
  ];

  teamMembers = [
    { name: 'John Doe', role: 'Astrologer', image: 'john_doe.jpg', charges: '$50' },
    { name: 'Jane Smith', role: 'Astrologer', image: 'jane_smith.jpg', charges: '$45' },
    { name: 'Michael Johnson', role: 'Astrologer', image: 'michael_johnson.jpg', charges: '$55' }
    // Add more team members as needed
  ];
}
