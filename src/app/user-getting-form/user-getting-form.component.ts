import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { RegistrationModel } from '../registration-model'
@Component({
  selector: 'app-user-getting-form',
  templateUrl: './user-getting-form.component.html',
  styleUrls: ['./user-getting-form.component.css']
})
export class UserGettingFormComponent implements OnInit {

OrgianlaregistrationObj: RegistrationModel = {

user: 'govardhan',
flexCheckDefault: true,
flexCheckChecked: false,
flexRadioDefault: true,
chooseCourse: 'Two',
Description: 'na',
password: 'secret',
date: '10/05/1995'


}
errorResponse: string;

registrationObj: RegistrationModel = {...this.OrgianlaregistrationObj}

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log()
  }

  onBlur(name: NgModel){
    console.log(name.value)
  }

  registrationFormSubmit(){
      this.dataService.postFormData(this.registrationObj).subscribe(
        result => {
          console.log(result.text)
        },
        error => {
          this.errorResponse = error.error.ErrorMessage;
        }
      )
  }

}