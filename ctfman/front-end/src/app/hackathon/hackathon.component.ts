import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MatIconRegistry } from '@angular/material';
import { HackathonEditComponent } from './hackathon-edit';
import { HackathonCreateComponent } from './hackathon-create';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { fadeInOut, flyInOut } from "../shared/services/animations";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class HackathonComponent implements OnInit {
  public hackathon_list: any = [];

  constructor(private _apiService: ApiService, private dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.loadHackathons();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(HackathonCreateComponent);
    const snack = this.snackBar.open('Opening create dialog');
    snack.closeWithAction()

    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Successfully created new hackathon', 'Created', {
          duration: 2000,
        });
        this.loadHackathons();
      }
    });
  }

  openEditDialog(hackathon_data) {
    console.log(hackathon_data);
    const dialogRef = this.dialog.open(HackathonEditComponent, {
      minWidth: 300,
      maxWidth: 400,
      data: { hackathon: hackathon_data }
    });
    const snack = this.snackBar.open('Opening edit dialog');
    snack.closeWithAction()

    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Successfully written changes', 'Saved', {
          duration: 2000,
        });
        this.loadHackathons();
      }
    });
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
