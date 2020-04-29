import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterFormComponent } from './register-form/register-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-app';

  constructor(private matDialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name: "some name"};
    this.matDialog.open(RegisterFormComponent, dialogConfig);
  }
}
