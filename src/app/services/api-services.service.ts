import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }
  baseUrl="https://youtubedownloader-api.herokuapp.com/app/"

  sendUrl(url:any)
  {
    return this.http.post(this.baseUrl+'getVideo',url,{responseType:'blob'})
  }
}
