import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CollectionService } from 'src/app/collection/collection.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'add-army-modal',
  templateUrl: './add-army-modal.component.html',
  styleUrls: ['./add-army-modal.component.css']
})
export class AddArmyModalComponent implements OnInit {

  public event: EventEmitter = new EventEmitter();
  armyName = new FormControl('');
  modalRef: BsModalRef;
  factionID: number;


  constructor(private collectionService: CollectionService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  onAddArmy(armyName): void{
    console.log(this.factionID)
    this.collectionService.saveNewArmy(armyName, this.factionID)
    .subscribe()
    this.closeModal();
  }

  closeModal(): void {
    this.modalService.hide();

 }

}
