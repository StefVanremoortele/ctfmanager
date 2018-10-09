import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../shared/services/';

@Component({
  selector: 'app-edit-ctf',
  templateUrl: './edit-ctf.component.html',
  styleUrls: ['./edit-ctf.component.scss']
})

export class EditCtfComponent implements OnInit {

  @Input() hackathon_id: any;
  @Output() modal_saved_action = new EventEmitter<boolean>();
  hackathon: any;
  closeResult: string;

  constructor(private modalService: NgbModal, private _apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  load_hackathon(hackathon_id) {
    this._apiService.getHackathon(hackathon_id).subscribe(
      data => {
        this.hackathon = data;
        this.hackathon.startDate = new Date(data.startDate);
        this.hackathon.endDate = new Date(data.endDate);
      },
      err => {
        console.log(err);
      },
      () => {
        this.hackathon.startDate = new Date(this.hackathon.startDate);
        this.hackathon.endDate = new Date(this.hackathon.endDate);
      }
    )
  }

  save_changes() {
    this._apiService.updateHackathon(this.hackathon).subscribe(
      data => {
        this.modal_saved_action.emit(true);
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  updateValue(e) {
    let element_id = e.path[0].id;
    if (element_id == "hackathon-name") {
      this.hackathon.name = e.target.value;
    }
    if (element_id == "hackathon-rating") {
      this.hackathon.rating = e.target.value;
    }
  }

  updateStartDate(date) {
    this.hackathon.startDate = new Date(date.year, date.month-1, date.day);
  }

  updateEndDate(date) {
    this.hackathon.endDate = new Date(date.year, date.month-1, date.day);
  }

  open(content) {
    this.load_hackathon(this.hackathon_id);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.save_changes();
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

