import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindAstrologersComponent } from './find-astrologers/find-astrologers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AstrologerSignupComponent } from './astrologer-signup/astrologer-signup.component';
import { ChatWithAstrologerComponent } from './chat-with-astrologer/chat-with-astrologer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-astrologers', component: FindAstrologersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: 'astrologer-signup', component: AstrologerSignupComponent },
  { path: 'chat-with-astrologer', component: ChatWithAstrologerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
