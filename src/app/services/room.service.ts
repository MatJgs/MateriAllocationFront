import { Injectable } from '@angular/core';
import {Room} from "../models/room.model";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RoomForm} from "../models/room.form";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private readonly BASE_URL = "http://localhost:8080/api/room";

  private _roomsChanged = new BehaviorSubject<undefined>(undefined)

  constructor(private readonly _httpClient: HttpClient) {}

  get $roomChanged() {
    return this._roomsChanged.asObservable();
  }

  getAll(): Observable<Room[]> {
    return this._httpClient.get<Room[]>(this.BASE_URL);
  }
  create(form: RoomForm): Observable<never> {
    return this._httpClient.post<never>(this.BASE_URL, form).pipe(
      tap( (data) => this._roomsChanged.next(undefined) )
    );
  }

}
