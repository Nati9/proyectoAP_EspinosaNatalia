import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Educacion } from "../model/educacion";

@Injectable({
    providedIn: 'root'
  })
export class SEducacionService {

    expURL = 'https://backend-nataliae.herokuapp.com/';

    constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.expURL + 'edu/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.expURL + `edu/detail/${id}`);
  } 

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'edu/create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `edu/update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `edu/delete/${id}`);
  }
}
