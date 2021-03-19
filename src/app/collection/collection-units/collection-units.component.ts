import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router'
import { map, switchMap, take, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { BtnCellRendererComponent } from 'src/app/agGrid-Elements/btn-cell-renderer/btn-cell-renderer.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditUnitModalComponent } from 'src/app/modal/edit-unit-modal/edit-unit-modal.component';

@Component({
  selector: 'app-collection-units',
  templateUrl: './collection-units.component.html',
  styleUrls: ['./collection-units.component.css'],
})
export class CollectionUnitsComponent implements OnInit {

  units$: Observable<any[]>;
  armyIDParam: any;
  onClickDeleteHandler = (id:any) => this.onDeleteUnit.call(this, id);
  onClickOpenModal = (id:number) => this.openEditModal.call(this, id);
  modalRef: BsModalRef;
  list: any[] = [];

  frameworkComponents = {
    btnCellRenderer: BtnCellRendererComponent
  };

  columnDefs = [
    { headerName: 'Name', field: 'name', width: 400 },
    { headerName: 'Type', field: 'type', width: 200 },
    { headerName: 'Quantity', field: 'quantity', width: 100},
    { headerName: '',
      field: 'id',
      width: 50,
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: this.onClickDeleteHandler,
        iconClass: '<i class="fas fa-minus"></i>'
      }
    },
    { headerName: '',
      field: 'id',
      width: 54,
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: this.onClickOpenModal,
        iconClass: '<i class="fas fa-edit"></i>'
      }
    },
    { field: '',
      width: 110,
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function() {
          window.location.href = '/collection-wargear'
        },
        iconClass: 'Wargear'
      }
    }
  ];

  constructor( private collectionSerivice: CollectionService,
               private activatedRoute: ActivatedRoute,
               private modalService: BsModalService) { }

  ngOnInit() {
  }

  onGridReady(params) {
    this.units$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const armyIDParam = params.get('id')
        return this.collectionSerivice.getUnitsbyArmyID(armyIDParam)
      })
    )
  }

  onDeleteUnit(unitID: number): void{
    this.collectionSerivice.deleteUnit(unitID)
    .subscribe();
  }

  openEditModal(unitID: number): void {

    this.units$.pipe(
      map((unfilteredData) => this.filterData(unfilteredData, unitID)),
      tap((finalData) => {this.modalRef = this.modalService.show(EditUnitModalComponent, {initialState: {currentUnit:finalData}})})
    ).subscribe()
  }

  openAddModal(): void {
    this.modalRef = this.modalService.show(EditUnitModalComponent);
  }

 filterData(unfilteredData: any[], unitID: number) { 
  return unfilteredData.filter((currentItem) => {
  return (currentItem.id == unitID)})}
}
