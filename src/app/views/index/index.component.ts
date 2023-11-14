import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  historyTitle: string = "What I've Done"
  historyContent: string = `From dancing on internationally renowned stages at home and abroad,
  singing for thousands across the country, and acting on stage and on camera, I haven't done it all but I've come close.
  Now as a developer, and I'm ready to do it all again.`
  historyButtonText: string = "Bio and CV"
  historyLink: string = "history"
  
  apiTitle: string = "What I'm Doing"
  apiContent: string = `Developing and making my front end talk to APIs, my own 
  and others. Check out top stories of the day from the New York Times API.`
  apiButtonText: string = "Get Up to Date"
  apiLink: string = "api"
  
  projectsTitle: string = "Little Boxes"
  projectsContent: string = `From small things big things grow. Check out some of the small projects I've been working on.`
  projectsButtonText: string = "See what I've been up to"
  projectsLink: string = "projects"



  
}
