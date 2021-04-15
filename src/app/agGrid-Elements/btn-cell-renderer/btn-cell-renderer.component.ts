import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.css']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp, OnDestroy {

  private params: any;
  btnIconClass: string;

  agInit(params: any): void {
    this.params = params;
    this.btnIconClass = params.iconClass;
  }

  btnClickedHandler(params) {
    this.params.clicked(this.params.value);
  }

  ngOnDestroy() {
  }

  refresh(params: ICellRendererParams): any {

  }

}