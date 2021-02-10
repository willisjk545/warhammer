import { HttpParams } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service'

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

  constructor(private collectionService: CollectionService) { }

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

  onAddArmy(armyName): void{
    this.collectionService.saveNewArmy(armyName)
    .subscribe((newArmyData) => newArmyData)
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
    console.log(armyID)
    this.collectionService.deleteArmy(armyID)
    .subscribe();
  }

}
