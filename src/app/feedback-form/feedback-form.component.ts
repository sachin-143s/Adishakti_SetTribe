import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  feedbackForm: FormGroup;
  private apiUrl = 'http://localhost:8080/api/feedbacks/this.feedbackForm';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.feedbackForm = this.fb.group({
      userId: ['', Validators.required],
      astrologerId: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.createFeedback(this.feedbackForm.value).subscribe(
        response => {
          console.log('Feedback submitted', response);
          this.feedbackForm.reset();
        },
        error => {
          console.error('Error submitting feedback', error);
        }
      );
    }
  }

  createFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }
}