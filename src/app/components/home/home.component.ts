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

  panelOpenState = false;
  
  ngOnInit(): void {
    
  }

}
