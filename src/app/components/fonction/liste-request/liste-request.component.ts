import { Component } from '@angular/core';
import {Requete} from "../../../models/requete.model";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-liste-request',
  templateUrl: './liste-request.component.html',
  styleUrls: ['./liste-request.component.scss']
})
export class ListeRequestComponent {
  requests:Requete[]=[];
  isLoading:boolean;
  constructor(
    private readonly _requestsService: RequestsService
  ) {
    this.isLoading=true;
    this._requestsService.getAll().subscribe({
      next:(requests)=>{
        this.requests=requests;
        this.isLoading=false;
      }
    })
  }

}
