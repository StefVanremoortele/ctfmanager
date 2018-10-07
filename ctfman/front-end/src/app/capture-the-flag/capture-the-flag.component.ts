import { Component, OnInit } from '@angular/core';
import { CtfService } from './ctf.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-capture-the-flag',
  templateUrl: './capture-the-flag.component.html',
  styleUrls: ['./capture-the-flag.component.scss']
})
export class CaptureTheFlagComponent implements OnInit {
  public ctf_list: any = [];

  constructor(private _ctfService: CtfService) {

  }

  ngOnInit() {
    this.getCtfs();
  }

  getCtfs() {
    this._ctfService.list().subscribe(
      data => {
        this.ctf_list = data;
      },
      err => console.error(err),
      () => console.log('done loading CTFs')
    );
  }

  createCtf() {
    // route to create ctf  page  ||  popup model for creation
    
  }
  
}
