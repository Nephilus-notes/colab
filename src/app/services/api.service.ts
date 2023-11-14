import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
NYTimesURL: string = `${environment.NYTIMES_TOP_STORIES_URL_HOME}${environment.NYTIMES_API_KEY}`;

public getHomeArticles(): Observable<any> {

  const response = this.http.get<any>(this.NYTimesURL);

  return response;
}

}
