import { Component, OnInit } from '@angular/core';
import { CtfService } from './ctf.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ApiService } from '../shared';

@Component({
  selector: 'app-capture-the-flag',
  templateUrl: './capture-the-flag.component.html',
  styleUrls: ['./capture-the-flag.component.scss']
})
export class CaptureTheFlagComponent implements OnInit {
  public hackathon_list: any = [];

  constructor(private _ctfService: CtfService, private _apiService: ApiService) {

  }

  ngOnInit() {
    this.loadHackathons();
  }

  loadHackathons() {
    this._apiService.getAllHackathons().subscribe(
      data => {
        this.hackathon_list = data;
      },
      err => console.error(err),
      () => console.log('done loading hackathons')
    );
  }
  

  modal_saved_action(save: boolean) {
    if (save) 
      this.loadHackathons();
  }
  

}