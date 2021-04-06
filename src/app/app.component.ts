import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'twitter';
  constructor(private ts:  TwitterService) {}
  ngOnInit() {
    
  }
  onClick() {
    this.ts.getTwitter().subscribe(
      (data)=> console.log(data),
      (error)=> console.log(error)
    );
  }
}
