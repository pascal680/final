import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listUsers: Array<User>;
  public headElements = ['ID', 'Name', 'Pwd', 'UserInterface', 'Operation'];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.service.getAll().subscribe(res => {
      this.listUsers = res;
    }, (err)=> {
      console.log(err);
    });
  }

  public delete(id: number){
    if(window.confirm("Are you sure?")){
      this.service.deleteById(id).subscribe(() =>{
        this.listUsers = this.listUsers.filter(record => record.id !== id);
      },(err)=>{
        console.log(err);
      })
    }
  }

  public delete2(id: number, i:any){
    if(window.confirm("Are you sure?")){
      this.service.deleteById(id).subscribe(() =>{
        this.listUsers.splice(i,1);
      },(err)=>{
        console.log(err);
      });
  }
  }
}
