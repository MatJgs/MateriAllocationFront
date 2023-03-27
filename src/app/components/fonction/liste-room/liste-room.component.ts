import {Component, OnDestroy, OnInit} from '@angular/core';
import {Requete} from "../../../models/requete.model";
import {RequestsService} from "../../../services/requests.service";
import {Subscription} from "rxjs";
import {RoomService} from "../../../services/room.service";
import {Room} from "../../../models/room.model";

@Component({
  selector: 'app-liste-request',
  templateUrl: './liste-room.component.html',
  styleUrls: ['./liste-room.component.scss']
})
export class ListeRoomComponent  implements OnInit, OnDestroy{

  roomList!: Room[];
  onChangedSub!: Subscription;

  constructor(private readonly _roomService: RoomService) {
  }

  ngOnInit(): void {
    // this.loadRooms();
    this.onChangedSub = this._roomService.$roomChanged.subscribe( () => this.loadRooms() )
  }

  ngOnDestroy(): void {
    this.onChangedSub.unsubscribe();
  }

  loadRooms(){
    this._roomService.getAll().subscribe({
      next: data => this.roomList = data,
      error: console.error
    });
  }
}
