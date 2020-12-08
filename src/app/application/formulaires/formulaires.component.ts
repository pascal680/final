import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulairesService } from './formulaires.service';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent implements OnInit {
    userForm = new FormGroup({​​​​​​​​
      name:new FormControl('', [Validators.required, Validators.minLength(8)]),
      password:new FormControl('', Validators.required),
      emailOffers:new FormControl('', Validators.required),
      interfaceStyle:new FormControl('', Validators.required),
      subscriptionType:new FormControl('', Validators.required),
      notes:new FormControl()
  }​​​​​​​​);
   
    user:User;
    validMessage:string=""
   
  constructor(private service: FormulairesService, private router:Router){​​​​​​​​
   
  }​​​​​​​​
   
  ngOnInit():void{​​​​​​​​
  }​​​​​​​​
   
  getform2(){​​​​​​​​
  return this.userForm.controls;
  }​​​​​​​​
   
  onSubmit(){​​​​​​​​
  if(this.userForm.valid){​​​​​​​​
  this.service.post(this.userForm.value).subscribe(data=>{​​​​​​​​
  this.userForm.reset();
  this.router.navigateByUrl('/home')
  }​​​​​​​​)
  }​​​​​​​​
  else{​​​​​​​​
  this.validMessage="Please fill out the form before submit";
  }​​​​​​​​
  }​​​​​​​​
   
  }​​​​​​​​
  



