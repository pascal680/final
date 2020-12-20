import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { GenericService } from './generic.service'

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:3001/users")
   }
}
