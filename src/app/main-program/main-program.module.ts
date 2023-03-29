import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../navbar/components/navbar/navbar.component';
import { ActionContainerComponent } from './components/action-container/action-container.component';
import { MainProgramContainerComponent } from './components/main-program-container/main-program-container.component';
import { MainProgramUiComponent } from './components/main-program-ui/main-program-ui.component';
import { ScoreContainerComponent } from './components/score-container/score-container.component';
import { UsernameInputFormComponent } from './components/username-input-form/username-input-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MainProgramContainerComponent,
    MainProgramUiComponent,
    ScoreContainerComponent,
    ActionContainerComponent,
    UsernameInputFormComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    CommonModule
  ],
  exports: [
    MainProgramContainerComponent,
    MainProgramUiComponent,
    ScoreContainerComponent,
    ActionContainerComponent
  ],
  providers: [],
  entryComponents: [
    UsernameInputFormComponent,
    // LoadingScreenComponent
  ]
})
export class MainProgramModule { }
