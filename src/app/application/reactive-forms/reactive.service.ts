import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { GenericService } from '../crud/services/generic.service'

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends GenericService<User,number> {

  constructor(http: HttpClient) {
    super(http, "");
  }
}
