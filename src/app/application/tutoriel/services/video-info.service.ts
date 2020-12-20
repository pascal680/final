import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../../crud/services/generic.service'
import { VideoInfo } from '../../models/videoInfo'

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService extends GenericService <VideoInfo, number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:3002/videoInfos")
   }
}
