import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router'
import { take, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { BtnCellRendererComponent } from 'src/app/agGrid-Elements/btn-cell-renderer/btn-cell-renderer.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditUnitModalComponent } from 'src/app/modal/edit-unit-modal/edit-unit-modal.component';
import { ConfirmModalComponent } from 'src/app/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-collection-units',
  templateUrl: './collection-units.component.html',
  styleUrls: ['./collection-units.component.css'],
})
export class CollectionUnitsComponent implements OnInit {

  units$: Observable<any[]>;
  armyIDParam: any;
  onClickDeleteHandler = (id:any) => this.openConfirmDeleteModal.call(this, id);
  onClickOpenModal = (id:number) => this.openEditModal.call(this, id);
  modalRef: BsModalRef;
  unitsData: any;

  frameworkComponents = {
    btnCellRenderer: BtnCellRendererComponent
  };

  columnDefs = [
    { headerName: 'Name', field: 'name', width: 500 },
    { headerName: 'Type', field: 'type', width: 300 },
    { headerName: 'Quantity', field: 'quantity', width: 200},
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
    }
    // { field: '',
    //   width: 110,
    //   cellRenderer: 'btnCellRenderer',
    //   cellRendererParams: {
    //     clicked: function() {
    //       window.location.href = '/collection-wargear'
    //     },
    //     iconClass: 'Wargear'
    //   }
    // }
  ];

  constructor( private collectionSerivice: CollectionService,
               private activatedRoute: ActivatedRoute,
               private modalService: BsModalService) { }

  ngOnInit() {
  }

  onGridReady(params) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.armyIDParam = params.get('id');
    })

    this.onGetUnitsByArmyID(this.armyIDParam);
  }

  onDeleteUnit(unitID: number): void{
    this.collectionSerivice.deleteUnit(unitID)
    .subscribe();

    this.closeModal();
  }
  
  onGetUnitsByArmyID(armyID: any): void {
    this.collectionSerivice.getUnitsbyArmyID(armyID)
    .subscribe((unitsData) => this.unitsData = unitsData)
  }
  
  closeModal(): void {
    this.modalRef.hide();
  }
  
  openAddModal(): void {
    this.modalRef = this.modalService.show(EditUnitModalComponent);
    
    this.modalRef.onHidden.pipe(
      take(1),
      tap(() => this.onGetUnitsByArmyID(this.armyIDParam))
      ).subscribe();
    }

    openEditModal(unitID: number): void {
      
      this.modalRef = this.modalService.show(EditUnitModalComponent, {initialState: {unitID: unitID}});
  
      this.modalRef.onHidden.pipe(
        take(1),
        tap(() => this.onGetUnitsByArmyID(this.armyIDParam))
      ).subscribe();
    }
    
    openConfirmDeleteModal(unitID: number): void {
      const id = {id: unitID};
      this.modalRef = this.modalService.show(ConfirmModalComponent, {initialState: {unitID: unitID}});

      this.modalRef.onHidden.pipe(
        take(1),
        tap(() => this.onGetUnitsByArmyID(this.armyIDParam))
      ).subscribe();
    }
}
