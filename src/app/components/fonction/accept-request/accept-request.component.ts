import {Component, OnInit} from '@angular/core';
import {Requete} from "../../../models/requete.model";

import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.scss']
})
export class AcceptRequestComponent implements OnInit{

  requetes!:Requete[];
  constructor(
    private readonly _requestsService: RequestsService
  ) {

  }
  ngOnInit():void{
    this._requestsService.getAll().subscribe({
      next: data => this.requetes = data,
      error: console.error
    });
  }



}
