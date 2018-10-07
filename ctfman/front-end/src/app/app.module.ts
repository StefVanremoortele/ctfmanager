import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';
import { CaptureTheFlagComponent } from "./capture-the-flag";
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CtfService } from './capture-the-flag/ctf.service';
import { ChallengesComponent } from './challenges/challenges.component';
import { CreateCtfComponent } from './capture-the-flag/create-ctf/create-ctf.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCtfComponent } from './capture-the-flag/edit-ctf/edit-ctf.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    CaptureTheFlagComponent,
    CreateCtfComponent,
    EditCtfComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, CoreModule, SharedModule, RouterModule, AppRoutingModule, NgbModule],
  providers: [BlogPostService, UserService, CtfService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) {}

  ngDoBootstrap() {
    // document.addEventListener('WebComponentsReady', () => {
    this._appRef.bootstrap(AppComponent);
    // });
  }
}