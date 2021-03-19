import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CollectionService } from 'src/app/collection/collection.service';

@Component({
  selector: 'app-edit-unit-modal',
  templateUrl: './edit-unit-modal.component.html',
  styleUrls: ['./edit-unit-modal.component.css']
})
export class EditUnitModalComponent implements OnInit {

  typeName: string = 'Type';
  unitName: string;
  quantity: number;
  currentUnit: any;
  unitID: number;
  armyID: number;
  editMode: boolean;

  constructor(private modalService: BsModalService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    if (this.currentUnit[0].id) {
      this.typeName = this.currentUnit[0].type;
      this.unitName = this.currentUnit[0].name;
      this.quantity = this.currentUnit[0].quantity;
      this.unitID = this.currentUnit[0].id
      this.armyID = this.currentUnit[0].armyID

      this.editMode = true
    }
    else {
      this.editMode = false
    }
  }

  onTypeSelected(unitType: string) {
    this.typeName = unitType;
  }

  closeModal(): void {
    this.modalService.hide();
  }

  onUpdateUnits(): void {
    this.collectionService.updateUnit(this.unitID, this.armyID, this.typeName, this.unitName, this.quantity)
    .subscribe();

    this.closeModal();
  }

  onAddNewUnit(): void {
    this.collectionService.saveNewUnit(this.unitName, this.typeName, this.quantity)
    .subscribe();

    this.closeModal();
  }

}
