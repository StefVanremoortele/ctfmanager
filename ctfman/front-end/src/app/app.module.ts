import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { routing } from './app-routing.module';
import { ToastModule } from 'ng6-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';
import { CoreModule } from './core';
import { SharedModule, ApiService } from './shared';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SizeSelectComponent } from './shared/models';
import { HackathonComponent } from './hackathon/hackathon.component';
import { HackathonEditComponent } from './hackathon/hackathon-edit/hackathon-edit.component';
import { HackathonCreateComponent } from './hackathon/hackathon-create/hackathon-create.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    SizeSelectComponent,
    HackathonComponent,
    HackathonEditComponent,
    HackathonCreateComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, CoreModule, SharedModule, RouterModule, AppRoutingModule, NgbModule, LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }), ToastModule.forRoot()],
  providers: [BlogPostService, UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    // document.addEventListener('WebComponentsReady', () => {
    this._appRef.bootstrap(AppComponent);
    // });
  }
}