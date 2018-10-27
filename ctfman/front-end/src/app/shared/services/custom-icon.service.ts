import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    // this.matIconRegistry.addSvgIcon(
    //   "cool_face",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/cool2.svg")
    // );
    this.matIconRegistry.addSvgIcon('account', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/account.svg'))
    this.matIconRegistry.addSvgIcon('add-circle', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/add-circle.svg'))
    this.matIconRegistry.addSvgIcon('code', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/code.svg'))
    this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/edit.svg'))
    this.matIconRegistry.registerFontClassAlias('fa');
  }
}