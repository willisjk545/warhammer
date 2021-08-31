import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';
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
              private modalService: BsModalService,
              private router: Router) { }

  ngOnInit(): void {
  }

  checkUserCredentials(username: string, password: string)
  {
    this.collectionService.loginUser(username, password).pipe(
      tap((authorized) => {this.isAuthorised = authorized;
        if (this.isAuthorised != false)
        {
          sessionStorage.setItem("sessionID", this.isAuthorised);
          this.router.navigate(['/faction'])
        }}))
      .subscribe()
  }

  openModal(): void
  {
    this.modalRef = this.modalService.show(NewUserModalComponent)
  }

}
