import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-youtube-downloader',
  templateUrl: './youtube-downloader.component.html',
  styleUrl: './youtube-downloader.component.css'
})
export class YoutubeDownloaderComponent {
  constructor(
    private apiService: ApiServicesService,
  ) {}
  urlHandler: string = '';
  fileName: string = ''; // incase if user forgets to enter the filename to be saved as
  startDownload: boolean = false;
  ngOnInit(): void {}
  submitUrl() {
    this.startDownload = true;
    if (this.urlHandler.length) {
      this.apiService.sendUrl(this.urlHandler).subscribe(
        (res) => {
          console.log(res);
          var blob = new Blob([res], { type: 'video/mp4' });
          const anchor = document.createElement('a');
          anchor.download =
            this.fileName.length != 0
              ? this.fileName + '.mp4'
              : 'youtube_video_download.mp4';
          //this.toastr.info('Download Started');
          alert("download started !");
          anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
          anchor.click();
          this.startDownload = false;
          alert("download completed !");
          this.deleteUrl()
        },
        (err) => {
          this.startDownload = false;
          alert("servers unreachable !");
        }
      );
    } else {
      this.startDownload = false;
      alert("url cannot be empty");
    }
  }

  deleteUrl() //this will call the service to delete the files that were downloaded into the root folder of server
  {
    this.apiService.deleteDownloadedFilesFromserver()
  }
}
