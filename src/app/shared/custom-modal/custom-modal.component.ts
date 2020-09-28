import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() title;
  @Input() messages;
  @Input() displayCancel;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
