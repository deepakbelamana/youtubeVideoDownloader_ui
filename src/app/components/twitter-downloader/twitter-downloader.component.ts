import { Component } from '@angular/core';




@Component({
  selector: 'app-twitter-downloader',
  templateUrl: './twitter-downloader.component.html',
  styleUrl: './twitter-downloader.component.css'
})
export class TwitterDownloaderComponent {
  tweeturlHandler:string='';
  folder:string='/tmp'
  startDownload: boolean = false;
  constructor() {

  }
  submitTweetUrl() {
    if(this.tweeturlHandler!=''){
     
   
    }
  }
}
