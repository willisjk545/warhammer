import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CollectionService } from 'src/app/collection/collection.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  unitID: number;
  modalRef: BsModalRef;

  constructor(private collectionSerivice: CollectionService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  onDeleteUnit(): void{
    this.collectionSerivice.deleteUnit(this.unitID)
    .subscribe();

    this.closeModal();
  }

  closeModal(): void {
    this.modalService.hide();
  }

}
