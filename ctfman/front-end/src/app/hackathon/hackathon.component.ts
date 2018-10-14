import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss']
})
export class HackathonComponent implements OnInit {
  public hackathon_list: any = [];

  constructor(private _apiService: ApiService) {

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
