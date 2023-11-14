import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() control!: number;
@Input() title!: string;
@Input() content!: string;
@Input() buttonText!: string;
@Input() link!: string;
@Input() language!: string;

}
