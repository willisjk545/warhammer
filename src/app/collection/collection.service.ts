import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private http: HttpClient
  ) { }

  getFactions(){
    return this.http.get('https://localhost:5001/api/factions')
  }

  getArmies(){
    return this.http.get('https://localhost:5001/api/armies')
  }

  saveNewArmy(armyName)
  {
    return this.http.post('https://localhost:5001/api/armies', {"Name":armyName}, {
  })
  }

  
}
