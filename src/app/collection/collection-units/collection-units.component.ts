import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router'
import { switchMap, take, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { BtnCellRendererComponent } from 'src/app/agGrid-Elements/btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-collection-units',
  templateUrl: './collection-units.component.html',
  styleUrls: ['./collection-units.component.css'],
})
export class CollectionUnitsComponent implements OnInit {

  units$: Observable<any>;
  armyIDParam: any;

  frameworkComponents = {
    btnCellRenderer: BtnCellRendererComponent
  };

  columnDefs = [
    { headerName: 'Name', field: 'name', width: 400 },
    { headerName: 'Type', field: 'type', width: 200 },
    { headerName: 'Quantity', field: 'quantity', width: 100},
    { field: '', 
     cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function(field: any) {
          alert('${field} was clicked')
        },
        iconClass: '<i class="fas fa-minus"></i>'
      } 
    }
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
