import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  historyTitle: string = "What I've Done"
  historyContent: string = "lots of stuff. You're welcome"
  historyButtonText: string = "See More"
  historyLink: string = "history"

  titlestuff: string = "Charles McCall, Charming creator, dashing developer, and all around Renaissance man Projects?"
  contentstuff: string = "Need a developer that does C# and works in .NET or Unity? How about someone happy in Typescript building in Angular or React?"
  buttonTextstuff: string = "See More"
  linkstuff: string = "/api"


  
}
