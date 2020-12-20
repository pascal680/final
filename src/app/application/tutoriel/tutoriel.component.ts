import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoInfoService } from './services/video-info.service';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.css']
})
export class TutorielComponent implements OnInit {
  videoInfoForm = new FormGroup({​​​​​​​​
    titreVideo:new FormControl('', Validators.required),
    videoUrl:new FormControl('', Validators.required),
    ageRestricted:new FormControl(''),
    typeVideo:new FormControl('', Validators.required),
}​​​​​​​​);
 
  validMessage:string=""
 
constructor(private service: VideoInfoService, private router:Router){​​​​​​​​
 
}​​​​​​​​
 
ngOnInit():void{​​​​​​​​
}​​​​​​​​
 
get form2(){​​​​​​​​
return this.videoInfoForm.controls;
}​​​​​​​​
 
onSubmit(){​​​​​​​​
if(this.videoInfoForm.valid){​​​​​​​​
this.service.post(this.videoInfoForm.value).subscribe(data=>{​​​​​​​​
this.videoInfoForm.reset();
this.router.navigateByUrl('/fun')
}​​​​​​​​)
}​​​​​​​​
else{​​​​​​​​
this.validMessage="Please fill out the form before submit";
}​​​​​​​​
}​​​​​​​​

}
