import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { StatsComponent } from './stats/stats.component';
import { TopRatedAstrologersComponent } from './top-rated-astrologers/top-rated-astrologers.component';
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FindAstrologersComponent } from './find-astrologers/find-astrologers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AstrologerSignupComponent } from './astrologer-signup/astrologer-signup.component';
import { ChatWithAstrologerComponent } from './chat-with-astrologer/chat-with-astrologer.component';
import { WhyadiComponent } from './whyadi/whyadi.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ManageUsersComponent } from './admin-management/manage-users/manage-users.component';
import { ManageAstrologersComponent } from './admin-management/manage-astrologers/manage-astrologers.component';
import { ManageBlogsComponent } from './admin-management/manage-blogs/manage-blogs.component';
import { ManageSkillsComponent } from './admin-management/manage-skills/manage-skills.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    StatsComponent,
    TopRatedAstrologersComponent,
    LatestBlogsComponent,
    FooterComponent,
    HomeComponent,
    FindAstrologersComponent,
    AboutUsComponent,
    BlogsComponent,
    LoginComponent,
    SignupComponent,
    AdminLoginComponent,
    FeedbackFormComponent,
    AstrologerSignupComponent,
    ChatWithAstrologerComponent,
    WhyadiComponent,
    AdminManagementComponent,
    ManageUsersComponent,
    ManageAstrologersComponent,
    ManageBlogsComponent,
    ManageSkillsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
