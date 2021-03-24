import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddArmyModalComponent } from 'src/app/modal/add-army-modal/add-army-modal.component';
import { CollectionService } from '../collection.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-armies',
  templateUrl: './collection-armies.component.html',
  styleUrls: ['./collection-armies.component.css']
})
export class CollectionArmiesComponent implements OnInit {

  faction: string
  armies: object;
  modalRef: BsModalRef;
  factionID: string;

  constructor(private collectionService: CollectionService,
    private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.factionID = params.get('id')
    })

   this.onGetArmyByFactionID(this.factionID)
  }

  showArmies(): void {
    this.collectionService.getArmies()
    .subscribe((armiesData) => this.armies = armiesData)
  }

  onGetArmyByFactionID(factionID: string): void {
    this.collectionService.getArmyByFactionId(factionID)
    .subscribe((Armies) => this.armies = Armies)
  }

  onDeleteArmy(armyID: number): void{
    this.collectionService.deleteArmy(armyID)
    .subscribe();
    this.closeModal();
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  openModal(): void {
    this.modalRef = this.modalService.show(AddArmyModalComponent);
 }

 openConfirmModal(template: TemplateRef<any>, armyID: number): void {
  const test = {id: armyID};
  this.modalRef = this.modalService.show(template, {initialState: test, class: 'modal-sm'});
  }



}
