import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-username-input-form',
  templateUrl: './username-input-form.component.html',
  styleUrls: ['./username-input-form.component.css']
})
export class UsernameInputFormComponent {

  loadingDone: boolean = false;
  form!: FormGroup;
  username: string = '';
  constructor(public dialogRef: MatDialogRef<UsernameInputFormComponent>){
    this.createForm();
  }
  
  createForm(){
    this.form = new FormGroup({
      username: new FormControl('Player', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')])
    });
  }

  submit(){
    var username = this.form.controls['username'].value;
    this.dialogRef.close(username);
    this.loadingDone = true;
  }

}
