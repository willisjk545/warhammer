import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders({'Ocp-Apim-Subscription-Key':'8aff6aa7c4564f1aaf5e3cbb90ef1037'}), 
  };

  constructor(
    private http: HttpClient
  ) { }

  getFactions(){
    //return this.http.get('https://localhost:5001/api/factions')
    return this.http.get('https://warhammer40kservice-apim.azure-api.net/api/factions', this.requestOptions)
  }

  getArmiesByFactionId(factionID: number, userID: number){
    return this.http.get('https://localhost:5001/api/armies/getArmiesByFactionID/' + factionID + '/' + userID)
    //return this.http.get('https://warhammer40kservice-apim.azure-api.net/api/armies/byFactionID/' + factionId, this.requestOptions)
  }

  saveNewArmy(armyName: string, factionID: number, userID: number)
  {
    return this.http.post('https://localhost:5001/api/armies', {"Name":armyName, "FactionID":factionID, "UserID":userID})
    //return this.http.post('https://warhammer40kservice-apim.azure-api.net/api/armies', {"Name":armyName, "FactionID":factionID}, this.requestOptions)
  }

  deleteArmy(armyID: number, userID: number) {
    return this.http.delete('https://localhost:5001/api/armies/' + armyID+ '/' + userID)
    //return this.http.delete('https://warhammer40kservice-apim.azure-api.net/api/armies/' + armyID, this.requestOptions)
  }

  getUnitsbyArmyID(armyID: number, userID: number): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:5001/api/units/byArmyID/' + armyID + '/' + userID)
    //return this.http.get<any[]>('https://warhammer40kservice-apim.azure-api.net/api/units/byArmyID/' + armyID, this.requestOptions)
  }

  deleteUnit(unitID) {
    //return this.http.delete('https://localhost:5001/api/units/' + unitID)
    return this.http.delete('https://warhammer40kservice-apim.azure-api.net/api/units/' + unitID, this.requestOptions)
  }

  updateUnit(id: number, armyID: number, type: string, name: string, quantity: number, userID: number){
    return this.http.put('https://localhost:5001/api/units', {
    "ID": id,
    "ArmyID": armyID,
    "Type": type,
    "Name": name,
    "Quantity": quantity,
    "UserID": userID})
    // return this.http.put('https://warhammer40kservice-apim.azure-api.net/api/units', {
    // "ID": id,
    // "ArmyID": armyID,
    // "Type": type,
    // "Name": name,
    // "Quantity": quantity}, this.requestOptions)
  }

  saveNewUnit(unitName: string, unitType: string, quantity: number, armyID: number, userID: number) {
    return this.http.post('https://localhost:5001/api/units', {
      "Name": unitName, 
      "Type": unitType, 
      "Quantity": quantity,
      "ArmyID": armyID,
      "UserID": userID})
    // return this.http.post('https://warhammer40kservice-apim.azure-api.net/api/units', {
    //   "Name": unitName, 
    //   "Type": unitType, 
    //   "Quantity": quantity,
    //   "ArmyID": armyID}, this.requestOptions)
  }

  getUnitByUnitID(unitID: number) {
    //return this.http.get('https://localhost:5001/api/units/' + unitID)
    return this.http.get('https://warhammer40kservice-apim.azure-api.net/api/units/' + unitID, this.requestOptions)
  }

  loginUser(username: string, password: string)
  {
    return this.http.get('https://localhost:5001/api/users/checkPassword/' + username + "/" + password)
  }

  addNewUser(username: string, password: string)
  {
    return this.http.post('https://localhost:5001/api/users/', {"Username": username, "Password":password})
  }
  
}
