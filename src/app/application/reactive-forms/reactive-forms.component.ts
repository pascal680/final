import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveService } from './reactive.service';

@Component({
  selector: 'app-formulaires',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', Validators.required),
    emailOffers: new FormControl('', Validators.required),
    interfaceStyle: new FormControl('', Validators.required),
    subscriptionType: new FormControl('', Validators.required),
    notes: new FormControl()
  });

  user: User;
  validMessage: string = ""

  constructor(private service: ReactiveService, private router: Router) {

  }

  ngOnInit(): void {
  }

  get form2() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.service.post(this.userForm.value).subscribe(data => {
        this.userForm.reset();
        this.router.navigateByUrl('/home')
      })
    }
    else {
      this.validMessage = "Please fill out the form before submit";
    }
  }

}




