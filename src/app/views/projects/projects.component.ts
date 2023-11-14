import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  DTTitle: string = "Dragon's Tail Roleplaying Game"
  DTContent: string = `The front end of a roleplaying game built using Angular. 
  The backend is currently undergoing maintainence. Dragon's Tail uses Observables 
  to create several data pipelines that various components subsribe to and alter. 
  Databinding to pass information down to child components, or back up to parent components.
  In addition to an API service to interact with the database to enable save files 
  and store game data, there are several other bespoke dependencies injected to handle the internal 
  game logic and displaying game information in a variety of ways.`
  DTLink: string = "https://github.com/Nephilus-notes/Portfolio-Dragon-s-Tail"
  DTLang: string = "TypeScript/Angular"

  RDTitle: string = "Raindish: Song Database"
  RDContent: string = `A web service built with Razor Pages that enables users 
  to easily track, share, and collaborate on song writing projects. The database 
  is designed to allow several users to work on the same song, keeping track of 
  lyrics, chords, instrumentation, as well as what effects are needed for the song 
  to be performed correctly.`
  RDLink: string = "https://github.com/Nephilus-notes/Raindish"
  RDLang: string = "C#/Razor Pages"
  
  RWTitle: string = "Weather App"
  RWContent: string = `A weather app build using the Open Weather Map Api. In 
  addition to seperating Data and Authentication into different Contexts, the 
  app uses firebase to store user data, allowing users to favorite cities or locations 
  that can be displayed on their homepage. Also includes some basic caching to mitigate the 
  number of API calls on rerender.`
  RWLink: string = "https://github.com/Nephilus-notes/react-weather-app"
  RWLang: string = "JavaScript/React"

  PBTitle: string = "Dragon's Tail Backend"
  PBContent: string = `An api built using ASP.NET Core and PostgreSQL. Basic CRUD
  function is build simply enough but the switch from SQL Server to PostgreSQL 
  requisitioned a large amount of adaptation to the database access layer,
  explicitly creating the join tables that SQL Server would create implicitly,
  and adding DTOs to handle queries that return nested database objects.
  `
  PBLink: string = "https://github.com/Nephilus-notes/DTpureback"
  PBLang: string = "C#/ASP.NET Core"

  EGTitle: string = "Escape Gen"
  EGContent: string = `A small game in which the player must flee an encroaching
  darkness and find their way underground to safety. Options in the menu allow the 
  player to adjust the size of the map, the speed of the darkness, and whether
  their vision is obscured by a fog of war.`
  EGLink: string = "https://github.com/Nephilus-notes/EscapeGen"
  EGLang: string = "Python/Pyxel"

  buttonText: string = "Project Repository"

}
