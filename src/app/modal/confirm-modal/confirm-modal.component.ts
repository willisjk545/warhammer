import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';
import { CollectionService } from 'src/app/collection/collection.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  unitID: number;
  armyID: number;
  modalRef: BsModalRef;

  constructor(private collectionService: CollectionService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  onDeleteUnit(): void{
    this.collectionService.deleteUnit(this.unitID)
    .subscribe();

    this.closeModal();
  }

  onDeleteArmy(): void{
    this.collectionService.deleteArmy(this.armyID)
    .subscribe();
    
    this.closeModal();
  }

  closeModal(): void {
    this.modalService.hide();
  }

}
