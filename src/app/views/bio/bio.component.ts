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

studentContent: string = "I studied at the School of American Ballet, performed with New York City Ballet, and finally moved to seattle to train at the Pacific Northwest Ballet"
studentImg: string = "/assets/img/Half C-Daniil Simkin.jpg"

rnzbContent: string = "I moved to new zealand to dance with the Royal New Zealand Ballet, where I performed soloist and principal roles, and took up leatherworking"
rnzbImg: string = "/assets/img/mr_wolf_with_alayna].jpg"

freelanceContent: string = "I returned to New York and freelanced for a few years"
freelanceImg: string = "/assets/img/Read.jpg"

  public simpleToggle(): void {
    this.simple = !this.simple;
  }

}
