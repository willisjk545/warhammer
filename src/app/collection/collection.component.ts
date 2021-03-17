import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddArmyModalComponent } from '../modal/add-army-modal/add-army-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  factions: object;
  armies: object;
  showArmyInput = false;
  isImperium = 2;
  isChaos = 2;
  isXenos = 2;
  modalRef: BsModalRef;

  constructor(private collectionService: CollectionService,
              private modalService: BsModalService,
              private router: Router) { }

  ngOnInit() {
    this.showFactions();
  }

  showFactions(): void {
    this.collectionService.getFactions()
    .subscribe((factionsData) => this.factions = factionsData)
  }

  showArmies(): void {
    this.collectionService.getArmies()
    .subscribe((armiesData) => this.armies = armiesData)
  }

  showHideAddArmy(): void {
    this.showArmyInput = !this.showArmyInput
  }

  onFactionImperium(): void{
    this.isImperium = 1
    this.isXenos = 3
    this.isChaos = 3
    this.collectionService.getArmyByFactionId(1)
    .subscribe((ImperiumArmies) => this.armies = ImperiumArmies)
  }
  onFactionChaos(): void{
    this.isChaos = 1
    this.isImperium = 3
    this.isXenos = 3
    this.collectionService.getArmyByFactionId(2)
    .subscribe((ChaosArmies) => this.armies = ChaosArmies)
  }
  onFactionXenos(): void{
    this.isXenos = 1
    this.isImperium = 3
    this.isChaos = 3
    this.collectionService.getArmyByFactionId(3)
    .subscribe((XenosArmies) => this.armies = XenosArmies)
  }

  onDeleteArmy(armyID: number): void{
    this.collectionService.deleteArmy(armyID)
    .subscribe();
  }

  openModal(): void {
    this.modalRef = this.modalService.show(AddArmyModalComponent);
 }
}
