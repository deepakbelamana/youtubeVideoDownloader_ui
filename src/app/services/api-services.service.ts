import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }
  baseUrl="http://127.0.0.1:5000/app/"

  sendUrl(url:any)
  {
    return this.http.post(this.baseUrl+'getVideo',url)
  }
}
