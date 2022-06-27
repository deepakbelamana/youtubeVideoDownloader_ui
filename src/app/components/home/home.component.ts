import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private apiService: ApiServicesService,
    private toastr: ToastrService
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
          this.toastr.info('Download Started');
          anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
          anchor.click();
          this.startDownload = false;
          this.toastr.success('Downloaded');
        },
        (err) => {
          this.startDownload = false;
          this.toastr.error('Servers unreachable..!', 'Oops');
        }
      );
    } else {
      this.startDownload = false;
      this.toastr.error('copy and paste the video url ', 'Empty Url');
    }
  }
}
