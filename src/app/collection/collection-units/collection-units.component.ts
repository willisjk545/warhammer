import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router'
import { switchMap, take, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-collection-units',
  templateUrl: './collection-units.component.html',
  styleUrls: ['./collection-units.component.css']
})
export class CollectionUnitsComponent implements OnInit {

  units$: Observable<any>;
  armyIDParam: any;

  columnDefs = [
    { header: 'Name', field: 'name', width: 800 },
    { header: 'Type', field: 'type', width: 200 },
    { header: 'Quantity', field: 'quantity', width: 100}
  ];

  constructor( private collectionSerivice: CollectionService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showUnits();
  }

  showUnits(): void{
    this.units$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const armyIDParam = params.get('id')
        return this.collectionSerivice.getUnitsbyArmyID(armyIDParam) 
      })
    )
  }  
}
