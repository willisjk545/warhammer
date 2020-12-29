import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
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

  
}
