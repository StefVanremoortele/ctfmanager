import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../shared/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hackathon-create',
  templateUrl: './hackathon-create.component.html',
  styleUrls: ['./hackathon-create.component.scss']
})
export class HackathonCreateComponent implements OnInit {
  hackathonCreationForm: FormGroup;
  submitted = false;
  loading = true;
  closeResult: string;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.hackathonCreationForm = this.formBuilder.group({
      name: ['', Validators.required],
      // type: ['', Validators.required],
      // startDate: ['', false],
      // endDate: ['', false]
    })
  }

  get f() { return this.hackathonCreationForm.controls; }


  onSubmit() {
    this.submitted = true;
    this.createHackathon();
    if (this.hackathonCreationForm.invalid) {
      console.error("INVALIID!!");
      return;
    }
  }

  createHackathon() {
    // console.log(this.hackathonCreationForm.value);
    this._apiService.createHackathon(this.hackathonCreationForm.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      }
    )
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
