import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent, NotFoundComponent } from '.';
import { CaptureTheFlagComponent } from './capture-the-flag';
import { ChallengesComponent } from "./challenges";


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'CTF', component: CaptureTheFlagComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
// export const routing = RouterModule.forRoot(routes);


// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';

// // // import { AuthService AuthGuardService } from './shared';


// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent, UnauthorizedComponent } from './core';



// // export const authProviders = [
// // //   AuthService,
// // //   AuthGuardService
// // ];

// @NgModule({
//   exports: [ RouterModule ],s
//   imports: [ RouterModule.forRoot(routes) ]
  
// })
// export class AppRoutingModule {}