import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../shared/services';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Hackathon } from '../../shared/models';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit {
  submitted = false;
  hackathon: any;
  hackathonCreationForm: FormGroup;
  errorMsg: any;
  titleAlert: string = 'This field is required';

  constructor(private _apiService: ApiService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<HackathonCreateComponent>) { }

  ngOnInit(): void {
    this.hackathonCreationForm = this.formBuilder.group({
      name: [null, Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [null, Validators.required],
      // rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      // 'validate': ''
    })
    this.setChangeValidate();
  }

  setChangeValidate() {

    this.hackathonCreationForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    this.titleAlert = "You need to specify at least 3 characters";
    // this.hackathonCreationForm.get('name').setValidators(Validators.required);
    this.hackathonCreationForm.get('name').updateValueAndValidity();
  }

  getErrorRating() {
    return this.hackathonCreationForm.get('rating').hasError('required') ? 'Field is required' :
      this.hackathonCreationForm.get('rating').hasError('value') ? 'Not the right value' : 'Incorrect number';
  }

  get name() {
    return this.hackathonCreationForm.get('name') as FormControl
  }
  get f() { return this.hackathonCreationForm.controls; }


  createHackathon() {
    console.log(this.hackathonCreationForm.value);
    this._apiService.createHackathon(this.hackathonCreationForm.value).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close(true);
      },
      err => {
        this.handleError(err);
      }
    )
  }

  private handleError(error: any) {
    console.log("ERROR!!" + error.message);
    this.errorMsg = error;
    throwError(error.message || error);
  }
}
