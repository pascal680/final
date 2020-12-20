import { Component, OnInit } from '@angular/core';
import { VideoInfo } from '../models/videoInfo';
import { VideoInfoService } from '../tutoriel/services/video-info.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  videoInfo : VideoInfo;
  listVideoInfo: Array<VideoInfo>;
  public headElements = ['ID', 'Titre Video', 'Contenu Mature', 'Type Video', 'Operation'];


  constructor(private service: VideoInfoService) { }

  ngOnInit(): void {
    this.getAllVideoInfo();
  }
  getAllVideoInfo(): void {
    this.service.getAll().subscribe(res => {
      this.listVideoInfo = res;
    }, (err)=> {
      console.log(err);
    });
  }


  public delete(id: number, i:any){
    if(window.confirm("Are you sure?")){
      this.service.deleteById(id).subscribe(() =>{
        this.listVideoInfo.splice(i,1);
      },(err)=>{
        console.log(err);
      });
  }
  }

  public rechercher(id: number){
    this.service.getById(id).subscribe(res =>{
      this.videoInfo = res;
    }, (err) => {
      console.log(err)
    });
  }


}
