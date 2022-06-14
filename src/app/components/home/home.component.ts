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
  ngOnInit(): void {
  }
   submitUrl()
   {
      this.apiService.sendUrl(this.urlHandler).subscribe((res)=>
      {
        alert(res)
      }, err=> alert(err))
   }
}
