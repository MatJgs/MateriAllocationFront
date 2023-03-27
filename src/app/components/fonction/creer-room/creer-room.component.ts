import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MaterialService} from "../../../services/material.service";
import {Material} from "../../../models/material.model";
import {RoomService} from "../../../services/room.service";
import {ROOM_FORM} from "../../../models/room.form";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer-room',
  templateUrl: './creer-room.component.html',
  styleUrls: ['./creer-room.component.scss']
})
export class CreerRoomComponent implements OnInit{

  materials!: Material[];
  form: FormGroup;

  constructor(
    private readonly _materialService: MaterialService,
    private readonly _roomService: RoomService,
    private readonly _router: Router,
    builder: FormBuilder
  ){
    this.form = builder.group(ROOM_FORM);
  }

  ngOnInit(): void {
    this._materialService.getAll().subscribe( data => this.materials = data );
  }

  onSubmit(){
    if( this.form.valid ){
      console.log(this.form);
      this._roomService.create( this.form.value ).subscribe({next: (newPost) => {
          // Redirection vers le nouveau post, si tout c'est bien passé
          this._router.navigate(['/room-list']);
        }
    } )
    }
  }
}
