import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  constructor(private apiService: ApiService) {}
articles!: Article[];


  public getArticles(): void {
    this.apiService.getHomeArticles().subscribe(data => {
      console.warn("getting data")
      console.warn(data);
      console.warn("tried to console log data")
      this.articles = data.results;
    });
  }

  ngOnInit(): void {
    this.getArticles();
  }
}
