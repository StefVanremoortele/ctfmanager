import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ctf',
  templateUrl: './create-ctf.component.html',
  styleUrls: ['./create-ctf.component.scss']
})

export class CreateCtfComponent implements OnInit {
  new_hackathon: any;
  closeResult: string;
  hackathonCreationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.hackathonCreationForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      // startDate: ['', Validators.required],
      // endDate: ['', Validators.]
    })
  }

  get f() { return this.hackathonCreationForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log(this.hackathonCreationForm)
    if (this.hackathonCreationForm.invalid) {
      console.error("INVALIID!!");
      return;
    }
  }

  create(data) {
    console.log(this.new_hackathon);
    // this._apiService.createHackathon(data).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {
    //     console.error(err);
    //   }
    // )
  }

  updateStartDate(date) {
    this.new_hackathon.startDate = new Date(date.year, date.month - 1, date.day);
  }

  updateEndDate(date) {
    this.new_hackathon.startDate = new Date(date.year, date.month - 1, date.day);
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(reason) {
    this.modalService.dismissAll(reason);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

