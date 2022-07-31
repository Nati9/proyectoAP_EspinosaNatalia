import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys } from '../model/hys';



@Injectable({
  providedIn: 'root'
})
export class HySService {
  URL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys[]>{
    return this.httpClient.get<hys[]>(this.URL + 'hys/lista');
  }

  public detail(id: number): Observable<hys>{
    return this.httpClient.get<hys>(this.URL + `hys/detail/${id}`);
  } 

  public save(skills: hys): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'hys/create', skills);
  }

  public update(id: number, skills: hys): Observable<any>{
    return this.httpClient.put<any>(this.URL + `hys/update/${id}`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `hys/delete/${id}`);
  }

}