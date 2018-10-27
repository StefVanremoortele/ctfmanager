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
import { HomeComponent } from './home/home.component';
import { MaterialModule } from "./material.module";
import { MatDialog, MatDialogRef } from '@angular/material';
import { CommonModule } from '@angular/common';
import { CustomIconService } from './shared/services/custom-icon.service';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    SizeSelectComponent,
    HackathonComponent,
    HackathonEditComponent,
    HackathonCreateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, CoreModule, SharedModule, RouterModule, AppRoutingModule, NgbModule, MaterialModule, LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }), ToastModule.forRoot()],
  exports: [HackathonEditComponent],
  providers: [BlogPostService, UserService, ApiService, CustomIconService,
  {
    provide: MatDialogRef,
  useValue: {
    close: (dialogResult: any) => { }
  }
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    HackathonEditComponent,
    HackathonCreateComponent
  ]
})

export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    // document.addEventListener('WebComponentsReady', () => {
    this._appRef.bootstrap(AppComponent);
    // });
  }
}