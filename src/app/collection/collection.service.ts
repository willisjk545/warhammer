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
    const inboundData = this.http.get('https://localhost:5001/api/armies');
    console.log(inboundData, "inboundData");
    return inboundData;
  }

  getArmyByFactionId(factionId){
    return this.http.get('https://localhost:5001/api/armies/byFactionID/' + factionId)
  }

  saveNewArmy(armyName)
  {
    return this.http.post('https://localhost:5001/api/armies', {"Name":armyName, "FactionID":1})
  }

  deleteArmy(armyID) {
    return this.http.delete('https://localhost:5001/api/armies/' + armyID)
  }

  getUnitsbyArmyID(armyID) {
    return this.http.get('https://localhost:5001/api/units/byArmyID/' + armyID)
  }

  deleteUnit(unitID) {
    return this.http.delete('https://localhost:5001/api/units/' + unitID)
  }

  
}
