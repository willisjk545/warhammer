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

  getUnitsbyArmyID(armyID): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:5001/api/units/byArmyID/' + armyID)
  }

  deleteUnit(unitID) {
    return this.http.delete('https://localhost:5001/api/units/' + unitID)
  }

  updateUnit(id: number, armyID: number, type: string, name: string, quantity: number){
    return this.http.put('https://localhost:5001/api/units', {
    "ID": id,
    "ArmyID": armyID,
    "Type": type,
    "Name": name,
    "Quantity": quantity})
  }

  saveNewUnit(unitName: string, unitType: string, quantity: number) {
    return this.http.post('https://localhost:5001/api/units', {
      "Name": unitName, 
      "Type": unitType, 
      "Quantity": quantity,
      "ArmyID": 1033})
  }

  
}
