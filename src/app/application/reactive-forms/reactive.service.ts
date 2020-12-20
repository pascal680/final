import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GenericService } from '../crud/services/generic.service'
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<User,number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3001/users");
  }
}
