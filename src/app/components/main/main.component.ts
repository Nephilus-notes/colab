import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
mrWolfUrl: string = `{${environment.mr_wolf_url}}`
daniilUrl: string = `{${environment.daniil_jump_url}}`
lonelyUrl: string = `{${environment.lonely_stage_url}}`
enchantedUrl: string = `{${environment.enchanted_evening_url}}`
roadhouseUrl: string = `{${environment.roadhouse_front_url}}`
doNotUrl: string = `{${environment.do_not_light_url}}`
readUrl: string = `{${environment.read_url}}`
kissesUrl: string = `{${environment.million_kisses_url}}`
emeraldsUrl: string = `{${environment.emeralds_url}}`
headshotUrl: string = `{${environment.michael_hull_headshot_url}}`
}
