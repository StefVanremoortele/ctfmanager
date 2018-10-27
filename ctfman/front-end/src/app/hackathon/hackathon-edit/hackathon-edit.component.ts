import { Component, ViewContainerRef, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../shared/services/';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { NGXLogger } from 'ngx-logger';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA } from "@angular/material";
import { Hackathon } from '../../shared/models';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { throwError } from 'rxjs/internal/observable/throwError';


@Component({
  selector: 'app-hackathon-edit',
  templateUrl: './hackathon-edit.component.html',
  styleUrls: ['./hackathon-edit.component.scss'],
  providers: [NGXLogger],
})

export class HackathonEditComponent implements OnInit {

  hackathon: any;
  hackathonEditForm: FormGroup;
  errorMsg: any;
  titleAlert: string = 'This field is required';
  loading: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private snackBar: MatSnackBar, private _apiService: ApiService, private logger: NGXLogger, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<HackathonEditComponent>) {

  }

  ngOnInit(): void {
    this.loading = false;
    this.hackathon = this.data.hackathon;



    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    this.hackathonEditForm = this.formBuilder.group({
      name: [this.hackathon.name, Validators.required],
      startDate: [this.hackathon.startDate, Validators.required],
      endDate: [this.hackathon.endDate, Validators.required],
      rating: [this.hackathon.rating, [Validators.min(1), Validators.max(5)]],
      'validate': ''
    })
  }

  setChangeValidate() {

    this.hackathonEditForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    this.titleAlert = "You need to specify at least 3 characters";
    // this.hackathonEditForm.get('name').setValidators(Validators.required);
    this.hackathonEditForm.get('name').updateValueAndValidity();
  }

  getErrorRating() {
    return this.hackathonEditForm.get('rating').hasError('required') ? 'Field is required' :
      this.hackathonEditForm.get('rating').hasError('value') ? 'Not the right value' : 'Incorrect number';
  }

  get name() {
    return this.hackathonEditForm.get('name') as FormControl
  }
  get f() { return this.hackathonEditForm.controls; }



  saveChanges(): void {
    this.loading = true;
    this._apiService.updateHackathon(this.hackathon.id, this.hackathonEditForm.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
        // TODO: Raise error
        // prompt input validation
      },
      () => {
        this.logger.log("Saved changes for hackathon #" + this.hackathon.id)
        this.dialogRef.close(true);
      }
    )

  }


  private handleError(error: any) {
    console.log("ERROR!!" + error.message);
    this.errorMsg = error;
    throwError(error.message || error);
  }

}