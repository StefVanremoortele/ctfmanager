import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from "../shared";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RouterModule } from '@angular/router';
import { WriteOutJsonInterceptor } from "./write-out-json-intercepter";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,  RouterModule.forRoot([])
  ],
  declarations: [NotFoundComponent, UnauthorizedComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WriteOutJsonInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
