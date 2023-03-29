import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-program-ui',
  templateUrl: './main-program-ui.component.html',
  styleUrls: ['./main-program-ui.component.css']
})
export class MainProgramUiComponent {

  @Input() resultTxtUpdated: string = '';
  @Input() isProgramRunningUpdated: boolean = false;
  @Input() playerImgSrc = "../../../../assets/images/rock.png";
  @Input() computerImgSrc = "../../../../assets/images/rock.png";

  constructor(){

  }
}
