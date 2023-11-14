import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {

  simple: boolean = false;
  conditional: boolean = true;



controlCodePhoto: number = 1;
controlCodeProjects: number = 2;
seattleContent: string = "I danced at PNB for a few years, performing soloist and principal roles"
seattleImg: string = "/assets/img/Emeralds2014-Backstage_LT_078.JPG"

studentContent: string = `I studied at Ballet Chicago when I was 14, then the 
School of American Ballet at 15, and performed with New York City Ballet before 
I was 18, and finally moved to seattle to train at the Pacific Northwest Ballet.`
studentImg: string = "/assets/img/Half C-Daniil Simkin.jpg"

rnzbContent: string = `I moved to new zealand to dance with the Royal New
 Zealand Ballet, where I performed soloist and principal roles, and took up leatherworking`
rnzbImg: string = "/assets/img/mr_wolf_with_alayna].jpg"

freelanceContent: string = `I returned to New York and freelanced for a few years, 
performing at the Joyce Theatre with Emery LeCrone Dance, working with Philadanco 
and Sonia Dawkins to create Pieces of My Heart, a piece based around August Wilson's 
unpublished Love Poems.`
freelanceImg: string = "/assets/img/Read.jpg"



musicalContent: string = `I joined the cast of Disney's Aladdin First National 
Tour and toured the US performing in Boston, St. Louis, Dallas, Philadelphia, and many, many more cities.
After a year in Agrabah I moved on to the 50th Anniversary Tour of Jesus Christ 
Superstar as Fight Captain, Assistant Dance Captain and Caiaphas Cover.`
musicalImg: string = "/assets/img/Promo Shot by MichaelHull.jpg"

postContent: string = `I returned home to St. Louis during Covid to recover from 
a back injury. Since then I've rejoined the St. Louis Symphony Chorus, sung with
 the Winter Opera, and worked at Chipotle as a Kitchen manager. I left Chipotle to 
 follow an old passion: Software development.  I took the Coding Temple bootcamp
 and learned Javascript with Express and React, and Python with Django and Flask. 
 After that I built an array of projects to continue my learning, and picked up 
 a variety of jobs as I continue my search for a role in tech. These include working as 
 a sound technician, being the admin for the Shoelace Factory, and designing 
 costumes for a feature film.`
postImg: string = "/assets/img/Lonely Stage.jpg"


  public simpleToggle(): void {
    this.simple = !this.simple;
  }

}
