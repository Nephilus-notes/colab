import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
NYTimesURL: string = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=R9GzySamDkKvMtFQnDnKu5qNiZ1a0lDE"

public getHomeArticles(): Observable<any> {

  const response = this.http.get<any>(this.NYTimesURL);

  return response;
}

}
