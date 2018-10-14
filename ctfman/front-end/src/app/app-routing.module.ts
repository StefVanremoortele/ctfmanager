import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent, NotFoundComponent } from '.';
import { ChallengesComponent } from "./challenges";
import { HackathonComponent } from './hackathon/hackathon.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'hackathons', component: HackathonComponent },
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