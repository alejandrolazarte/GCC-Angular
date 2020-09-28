import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '../shared/custom-modal/custom-modal.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {   
   }

  public displayAlert(title: string, messages: string[], acceptFunction: any = null, cancelFunction: any = null, displayCancel = false) {
     debugger
    const modalRef = this.modalService.open(CustomModalComponent);

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.messages = messages;
    modalRef.componentInstance.displayCancel = displayCancel;
    modalRef.result.then((result) => {
        if (result) {
            modalRef.result.then(acceptFunction);
        } else {
            modalRef.result.then(cancelFunction);
        }
    }, cancelFunction).catch(() => { });
  }
}
