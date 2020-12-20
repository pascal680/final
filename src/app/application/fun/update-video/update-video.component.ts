import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoInfo } from '../../models/videoInfo';
import { VideoInfoService } from '../../tutoriel/services/video-info.service';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css']
})
export class UpdateVideoComponent implements OnInit {

  id: number;
  videoInfo : VideoInfo;
  updateVideoInfoForm: FormGroup;

  constructor(private service: VideoInfoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res =>{
      this.videoInfo = res;
    }, (err) => {
      console.log(err)
    });

    this.updateVideoInfoForm = new FormGroup({​​​​​​​​
      titreVideo : new FormControl('', Validators.required),
      videoUrl : new FormControl('', Validators.required),
      ageRestricted : new FormControl(''),
      typeVideo : new FormControl('', Validators.required),
  }​​​​​​​​);
  }

  get form2(){
    return this.updateVideoInfoForm.controls;
  }

  public updateVideoInfo(){
    this.service.put(this.id, this.updateVideoInfoForm.value).subscribe(() =>{
      this.router.navigateByUrl('fun')
    }, (err) => {
      console.log(err)
    })
  }

}
