import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  user: User;
  updateUserForm: FormGroup;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res =>{
      this.user = res;
    }, (err) => {
      console.log(err)
    });

    this.updateUserForm = new FormGroup({​​​​​​​​
      name:new FormControl('', [Validators.required, Validators.minLength(8)]),
      password:new FormControl('', Validators.required),
      emailOffers:new FormControl('', Validators.required),
      interfaceStyle:new FormControl('', Validators.required),
      subscriptionType:new FormControl('', Validators.required),
      notes:new FormControl()
  }​​​​​​​​);
  }

  

  public updateUser(){
    this.service.put(this.id, this.updateUserForm.value).subscribe(() =>{
      this.router.navigateByUrl('crud')
    }, (err) => {
      console.log(err)
    })
  }

}
