import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-container',
  templateUrl: './action-container.component.html',
  styleUrls: ['./action-container.component.css']
})
export class ActionContainerComponent {

  buttonName: string = '';
  isDisabled: boolean = false
  computerOptions: Array<string> = ['rock', 'paper', 'scissors'];
  resultTxt: string = '';
  pScore: number = 0;
  cScore: number = 0;
  @Output() pScoreUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() cScoreUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() resultTxtUpdated = new EventEmitter<string>();
  @Output() isProgramRunningUpdated = new EventEmitter<boolean>();
  @Output() playerImgSrc = new EventEmitter<string>();
  @Output() computerImgSrc = new EventEmitter<string>();

  constructor(){

  }

  performAction(action: string){
    this.isDisabled = true;
    this.isProgramRunning(true);
    let computerNumber = Math.floor(Math.random() * 3);
    let computerChoice = this.computerOptions[computerNumber];
  
    setTimeout(() => {
        //Here is where we call compareHands
        this.compareHands(action, computerChoice);

        //Update images
        // playerHand.src = `./assets/${this.textContent}.png`;
        // computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000)
  }

  compareHands(playerChoice: string, computerChoice: string){
    //update text
    const winner = document.querySelector('.winner');
    //checking for a tie
    if (playerChoice === computerChoice) {
        this.resultTxt = 'It is a tie!';
    } else {
      switch (playerChoice) {
        case 'rock': {
          computerChoice === 'scissors' ? this.playerWin() : this.playerLose();
          break;
        }
        case 'paper': {
          computerChoice === 'scissors' ? this.playerLose() : this.playerWin();
          break;
        }
        case 'scissors': {
          computerChoice === 'rock' ? this.playerLose() : this.playerWin();
          break;
        }
      }
    }
    this.updateScore();
    this.updateImg(playerChoice, computerChoice)
  }

  updateScore(){
    console.log(this.pScore, this.cScore)
    this.pScoreUpdated.emit(this.pScore);
    this.cScoreUpdated.emit(this.cScore);
    this.resultTxtUpdated.emit(this.resultTxt)
    this.isDisabled = false;
    this.isProgramRunning(false);
  }

  playerWin(){
    this.resultTxt = 'Player Wins!';
    this.pScore++;
  }

  playerLose(){
    this.resultTxt = 'Computer Win!';
    this.cScore++;
  }

  isProgramRunning(status: boolean){
    this.isProgramRunningUpdated.emit(status);
  }

  updateImg(playerChoice: string, computerChoice: string){
    this.playerImgSrc.emit(playerChoice);
    this.computerImgSrc.emit(computerChoice);
  }
}
