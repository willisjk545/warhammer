import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-collection-wargear',
  templateUrl: './collection-wargear.component.html',
  styleUrls: ['./collection-wargear.component.css']
})
export class CollectionWargearComponent implements OnInit {

  rangedWeapons = [
    'Boltgun',
    'Plasma Gun',
    'Flamer',
    'Lascannon'
  ];
  melleeWeapons = [
    'Thunder Hammer',
    'Chainsword',
    'Power Fist',
    'Power Sword'
  ];
  equipmentItems = [
    'Auspex',
    'Grenades',
    'Jet Pack',
    'Bike'
  ];

  done = [

  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
