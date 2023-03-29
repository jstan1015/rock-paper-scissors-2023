import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainProgramConstant } from '../../constant/main-program-constant';
import { UsernameInputFormComponent } from '../username-input-form/username-input-form.component';

@Component({
  selector: 'app-main-program-container',
  templateUrl: './main-program-container.component.html',
  styleUrls: ['./main-program-container.component.css']
})
export class MainProgramContainerComponent implements OnInit {
  
  pScoreUpdated: number = 0;
  cScoreUpdated: number = 0;
  resultTxtUpdated: string = '';
  isProgramRunningUpdated: boolean = false;
  playerImgSrc: string = MainProgramConstant.ImagePath + "rock.png";
  computerImgSrc: string = MainProgramConstant.ImagePath + "rock.png";
  playerName: string = 'Player';
  loadingDone: boolean = false;

  constructor(private dialog: MatDialog){

  }

  ngOnInit(): void {
      this.showUsernameInputForm();
  }

  updateScore(score: number, indicator: string){
    if(indicator === 'p')
      this.pScoreUpdated = score;
    else
      this.cScoreUpdated = score;
  }

  updateResultText(resultTxt: string){
    this.resultTxtUpdated = resultTxt;
  }

  updateProgramRunningStatus(status: boolean){
    this.isProgramRunningUpdated = status;
  }

  updateImgSrc(imgName:string, isPlayer:boolean){
    if (isPlayer)
      this.playerImgSrc = MainProgramConstant.ImagePath + imgName + ".png";
    else
      this.computerImgSrc = MainProgramConstant.ImagePath + imgName + ".png";
  }

  showUsernameInputForm(){
    const dialogRef = this.dialog.open(UsernameInputFormComponent, {
      width: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      this.playerName = data;
    });
  }

}
