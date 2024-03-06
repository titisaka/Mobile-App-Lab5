import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.httpClient.get('https://www.jsonblob.com/api/josonblob/1214885243084726272');
  }
}
