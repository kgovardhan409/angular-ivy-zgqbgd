import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationModel } from '../registration-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }  

  postFormData(regustrationDetails: RegistrationModel) : Observable<any>{
   return this.http.post('https://putsreq.com/uFk0srq3KoziF3u4avD3', regustrationDetails)
    
  }

} 