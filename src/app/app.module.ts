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
import { AstrologerDashboardComponent } from './astrologer-dashboard/astrologer-dashboard.component';
import { AstroProfileComponent } from './astro-profile/astro-profile.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AstroReportComponent } from './astro-report/astro-report.component';
import { InsertblogComponent } from './insertblog/insertblog.component';

import { CallWithAstrologerComponent } from './call-with-astrologer/call-with-astrologer.component';
import { ChatsComponent } from './chats/chats.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminAstrologerComponent } from './Admin/admin-astrologer/admin-astrologer.component';
import { ManageAstrologersComponent } from './Admin/manage-astrologers/manage-astrologers.component';
import { AstrologerRequestComponent } from './Admin/astrologer-request/astrologer-request.component';
import { ManageBlogComponent } from './Admin/manage-blog/manage-blog.component';
import { BlogService } from './blog.service';
import { AstEditorDeleteComponent } from './Admin/ast-editor-delete/ast-editor-delete.component';
import { ManageSkillsComponent } from './Admin/manage-skills/manage-skills.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { ManageUsersComponent } from './Admin/manage-users/manage-users.component';



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
    AstrologerDashboardComponent,
    AstroProfileComponent,
    ClientListComponent,
    AstroReportComponent,

    InsertblogComponent,

    CallWithAstrologerComponent,
      ChatsComponent,
      AdminDashboardComponent,
      AdminAstrologerComponent,
      ManageAstrologersComponent,
      AstrologerRequestComponent,
      ManageBlogComponent,
      AstEditorDeleteComponent,
      ManageSkillsComponent,
      AdminNavComponent,
      ManageUsersComponent

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
