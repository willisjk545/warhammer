import { HttpParams } from '@angular/common/http';
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
  showArmyInput = false

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.showFactions();
    this.showArmies();
    console.log(this.factions, "ngOnInit")
  }

  showFactions(): void {
    this.collectionService.getFactions()
    .subscribe((factionsData) => this.factions = factionsData)
  }

  showArmies(): void {
    this.collectionService.getArmies()
    .subscribe((armiesData) => this.armies = armiesData)
  }

  onAddArmy(): void {
    this.showArmyInput = !this.showArmyInput
  }
}
