import { Component, Input, OnDestroy, OnInit, ɵɵqueryRefresh } from '@angular/core';
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

  btnClickedHandler() {
    this.params.clicked(this.params.value);
    console.log(this.params.clicked(this.params.value))
  }

  ngOnDestroy() {
  }

  refresh(params: ICellRendererParams): any {

  }
}