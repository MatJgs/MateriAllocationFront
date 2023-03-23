import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Requete} from "../models/requete.model";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiUrl:string = 'http://localhost:8080/api/request';
  constructor(
    private readonly _http:HttpClient
  ) { }
  getAll(){
    return this._http.get<Requete[]>(this.apiUrl);
  }
  getOne(id:number){
    return this._http.get<Requete>(`${this.apiUrl}/${id}`);
  }
  create(data:any){
    return this._http.post<Requete>(this.apiUrl,data);
  }
}
