import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

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

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log("currentUnit", this.currentUnit[0].quantity)
    this.typeName = this.currentUnit[0].type;
    this.unitName = this.currentUnit[0].name;
    this.quantity = this.currentUnit[0].quantity;

  }

  onTypeSelected(unitType: string) {
    this.typeName = unitType;
  }

  closeModal(): void {
    this.modalService.hide();
  }

