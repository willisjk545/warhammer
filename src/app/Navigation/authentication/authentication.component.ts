import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CollectionService } from 'src/app/collection/collection.service';
import { NewUserModalComponent } from 'src/app/modal/new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  isAuthorised: any;
  modalRef: BsModalRef;

  constructor(private collectionService: CollectionService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  checkUserCredentials(username: string, password: string)
  {
    //console.log(username, password)
    this.collectionService.loginUser(username, password)
    //.subscribe((authorized) => this.isAuthorised = authorized)
    .subscribe((authorized) => console.log(authorized))
  }

  openModal(): void
  {
    this.modalRef = this.modalService.show(NewUserModalComponent)
  }

}
