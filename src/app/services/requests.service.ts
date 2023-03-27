import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { RequeteForm} from "../models/requete.form";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Requete} from "../models/requete.model";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiUrl:string = 'http://localhost:8080/api/request';
  private _requeteChanged = new BehaviorSubject<undefined>(undefined)
  constructor(
    private readonly _http:HttpClient
  ) { }
  getAll(){
    return this._http.get<Requete[]>(this.apiUrl+'/all');
  }

  create(form:RequeteForm):Observable<never>{
    return this._http.post<never>(this.apiUrl+'/new',form).pipe(
      tap(()=>this._requeteChanged.next(undefined))
    );
  }

}
