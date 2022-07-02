import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }
  baseUrl="https://youtubedownloader-api.herokuapp.com/app/" //production
  testingUrl='http://127.0.0.1:5000/app/' //testing

  sendUrl(url:any)
  {
    return this.http.post(this.baseUrl+'getVideo',url,{responseType:'blob'})
  }
  deleteDownloadedFilesFromserver()
  {
    return this.http.get(this.baseUrl+'delete').subscribe()
  }
}
