import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

registrationObj: RegistrationModel = {...this.OrgianlaregistrationObj}

  constructor() { }

  ngOnInit() {
    console.log()
  }


  onBlur(name: NgModel){
    console.log(name.value)
  }

}