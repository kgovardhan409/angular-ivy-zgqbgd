import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationModel } from '../registration-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }  

  postFormData(regustrationDetails: RegistrationModel): Observable<RegistrationModel>{
    return of(regustrationDetails);
  }

} 