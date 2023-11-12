import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
conditional: boolean = true;

seattleContent: string = "I danced at PNB for a few years, performing soloist and principal roles"
seattleImg: string = "/assets/img/Emeralds2014-Backstage_LT_078.JPG"
controlCodePhoto: number = 1;
controlCodeProjects: number = 2;

}
