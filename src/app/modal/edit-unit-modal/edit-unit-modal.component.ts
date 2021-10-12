import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';
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
  userID = sessionStorage.sessionID;

  constructor(private modalService: BsModalService,
              private collectionService: CollectionService) { }

  ngOnInit() {
    if (this.unitID) {
      this.collectionService.getUnitByUnitID(this.unitID, this.userID).pipe(
        tap((unitData) => {
        this.currentUnit = unitData
        this.typeName = this.currentUnit.type
        this.unitName = this.currentUnit.name
        this.quantity = this.currentUnit.quantity
        this.unitID = this.currentUnit.id
        this.armyID = this.currentUnit.armyID})
      ).subscribe();

  
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
    this.collectionService.updateUnit(this.unitID, this.armyID, this.typeName, this.unitName, this.quantity, parseInt(this.userID))
    .subscribe();

    this.closeModal();
  }

  onAddNewUnit(): void {
    this.collectionService.saveNewUnit(this.unitName, this.typeName, this.quantity, this.armyID, parseInt(this.userID))
    .subscribe();
    
    this.closeModal();
  }

}
