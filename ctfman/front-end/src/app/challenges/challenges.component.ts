import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges_list: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges() {
    this._apiService.getAllChallenges().subscribe(
      data => {
        this.challenges_list = data;
      }, 
      err => {
        console.error(err);
      }
    )
  }

}
