import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { FormControl, FormGroup } from '@angular/forms';
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


  constructor(private collectionService: CollectionService,
              private modalService: BsModalService,
              private router: Router) { }

  ngOnInit() {
  }

  onArmyNameSave(armyName: string): void {
      // this.event.emit()
  }

  onAddArmy(armyName): void{
    this.collectionService.saveNewArmy(armyName)
    .subscribe((newArmyData) => newArmyData)
    this.closeModal();
    this.router.navigate(['collection/'])
  }

  closeModal(): void {
    this.modalService.hide();
    
 }

}
