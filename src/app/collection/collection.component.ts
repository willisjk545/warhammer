import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service'
import { BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  factions: object;
  modalRef: BsModalRef;

  constructor(private collectionService: CollectionService,) { }

  ngOnInit() {
    this.showFactions();
  }

  showFactions(): void {
    this.collectionService.getFactions()
    .subscribe((factionsData) => this.factions = factionsData)
  }
    
}
