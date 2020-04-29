import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-app';

  constructor(private matDialog: MatDialog) {}

  openRegisterDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name: "registreer"};
    this.matDialog.open(RegisterDialogComponent, dialogConfig);
  }

  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name: "login"};
    this.matDialog.open(LoginDialogComponent, dialogConfig);
  }


}
