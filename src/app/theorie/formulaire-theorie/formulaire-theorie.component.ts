import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-formulaire-theorie',
  templateUrl: './formulaire-theorie.component.html',
  styleUrls: ['./formulaire-theorie.component.css']
})
export class FormulairesTheorieComponent implements OnInit {


  user: User ={
    name: '',
    password: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: "",
    notes: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form1: NgForm){
    console.log("Data recue : ", form1.valid);
    console.log(form1.value);
  }

}
