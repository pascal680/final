import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {

  tutorielLinkId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
