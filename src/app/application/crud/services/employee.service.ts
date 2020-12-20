import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<number,number>{

  constructor(http: HttpClient) {
    super(http, "")
   }
}
