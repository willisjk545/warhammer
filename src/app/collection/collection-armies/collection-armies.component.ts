import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddArmyModalComponent } from 'src/app/modal/add-army-modal/add-army-modal.component';
import { CollectionService } from '../collection.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ConfirmModalComponent } from 'src/app/modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-collection-armies',
  templateUrl: './collection-armies.component.html',
  styleUrls: ['./collection-armies.component.css']
})
export class CollectionArmiesComponent implements OnInit {

  faction: string
  armies: any;
  modalRef: BsModalRef;
  factionID: string;

  constructor(private collectionService: CollectionService,
    private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.factionID = params.get('factionID')
    })

   this.onGetArmyByFactionID(this.factionID)
  }

  onGetArmyByFactionID(factionID: string): void {
    this.collectionService.getArmyByFactionId(factionID)
    .subscribe((armiesData) => this.armies = armiesData)
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  openModal(): void {
    this.modalRef = this.modalService.show(AddArmyModalComponent, {initialState: {factionID: Number(this.factionID)}});

    this.modalRef.onHidden.pipe(
      take(1),
      tap(() => this.onGetArmyByFactionID(this.factionID))
    ).subscribe();
 }

 openConfirmModal( armyID: number): void {
  this.modalRef = this.modalService.show(ConfirmModalComponent, {initialState: {armyID: armyID}});

  this.modalRef.onHidden.pipe(
    take(1),
    tap(() => this.onGetArmyByFactionID(this.factionID))
  ).subscribe();
  }

}
