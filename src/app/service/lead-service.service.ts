import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {
  postApiUrl = 'http://localhost:8080/api/v1/user/createUser'

  constructor(private http:HttpClient) { }
  addLead(leadObj:any):Observable<any>{
   return this.http.post(this.postApiUrl, leadObj);


  }
}
