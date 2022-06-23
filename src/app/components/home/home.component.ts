import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiServicesService) { }
  urlHandler:any
  fileName:string=''//incase if user forgets to enter the filename to be saved as
  ngOnInit(): void {
  }
   submitUrl()
   {
      this.apiService.sendUrl(this.urlHandler).subscribe((res)=>
      {
        console.log(res)
        var blob = new Blob([res], { type: 'video/mp4' });
        const anchor = document.createElement('a');
        anchor.download = this.fileName.length!=0?this.fileName+".mp4":'youtube_video_download.mp4';
        alert("download Started")
        anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
        anchor.click();
        
      },err=>{ console.log(err)})
   }
}
