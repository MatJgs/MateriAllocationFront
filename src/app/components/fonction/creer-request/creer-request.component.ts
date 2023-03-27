import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsService} from "../../../services/requests.service";
import {Router} from "@angular/router";
import {Room} from "../../../models/room.model";
import {Subscription} from "rxjs";
import {Material} from "../../../models/material.model";
import {MaterialService} from "../../../services/material.service";
import {RoomService} from "../../../services/room.service";
import {REQUETE_FORM} from "../../../models/requete.form";

@Component({
  selector: 'app-creer-request',
  templateUrl: './creer-request.component.html',
  styleUrls: ['./creer-request.component.scss']
})
export class CreerRequestComponent implements OnInit{

  materials!: Material[];


  form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _requestService:RequestsService,

    private readonly _materialService: MaterialService,


  ) {
    this.form=this._fb.group(REQUETE_FORM)

  }
  ngOnInit(): void {
    this._materialService.getAll().subscribe( data => this.materials = data );
  }
  onSubmit(){
    if (this.form.valid){
      console.log(this.form);
      this._requestService.create(this.form.value).subscribe(()=>this.form.reset());
    }
  }
}
