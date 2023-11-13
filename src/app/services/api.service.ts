import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
NYTimesURL: string = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=R9GzySamDkKvMtFQnDnKu5qNiZ1a0lDE"


}
