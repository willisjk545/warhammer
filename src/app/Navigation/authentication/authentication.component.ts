import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CollectionService } from 'src/app/collection/collection.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  isAuthorised: any;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
  }

  checkUserCredentials(username: string, password: string)
  {
    //console.log(username, password)
    this.collectionService.loginUser(username, password)
    //.subscribe((authorized) => this.isAuthorised = authorized)
    .subscribe((authorized) => console.log(authorized))
  }

}
