import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-container',
  templateUrl: './score-container.component.html',
  styleUrls: ['./score-container.component.css']
})
export class ScoreContainerComponent {

  @Input() playerName: string = '';
  @Input() pScoreUpdated: number = 0;
  @Input() cScoreUpdated: number = 0;

  constructor(){

  }
}
