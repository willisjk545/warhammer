import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CollectionService } from 'src/app/collection/collection.service';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.css']
})
export class NewUserModalComponent implements OnInit {

  username = new FormControl('')
  password = new FormControl('')

  constructor(private modalService: BsModalService,
              private collectionService: CollectionService) { }

  ngOnInit(): void {
  }

  submitNewUser(username, password)
  {
    this.collectionService.addNewUser(username, password)
    .subscribe((test) => console.log(test))
    this.closeModal()
  }

  closeModal()
  {
    this.modalService.hide();
  }

}
