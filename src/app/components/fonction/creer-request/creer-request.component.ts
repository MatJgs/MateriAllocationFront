import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestsService} from "../../../services/requests.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creer-request',
  templateUrl: './creer-request.component.html',
  styleUrls: ['./creer-request.component.scss']
})
export class CreerRequestComponent {

  form: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _requestService:RequestsService,
    private readonly _router: Router,

    ) {
    this.form=this._fb.group({
      'capacity':[null,[Validators.required],[Validators.min(0)]],
      'justify':[null,[Validators.required],[Validators.minLength(10)]],
      'additional_note':[null,[Validators.required]],
      'date':[,[Validators.required], Validators.pattern("\d{4}-\d{2}-\d{2}")]
    })
  }
  onSubmit(){
    if (this.form.valid){
      this._requestService.create(this.form.value).subscribe({
        next: (newRequest)=>{
          this._router.navigate(['/request',newRequest.id])
        },
        error: (err) => {
          console.log("Gestion de l'erreur s'il y en a une");
        }
      })
    }
  }
}
