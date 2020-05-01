import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ViaService } from './via-service/via.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corona-app';

  firstName: string = '';
 

  constructor(private matDialog: MatDialog, public viaService : ViaService) {}

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

  logout(){
    sessionStorage.clear();
    this.firstName = '';
  }

  refreshLoginStatus() {
    this.firstName = sessionStorage.getItem('firstName');
  }

  ngOnInit() {
    this.viaService.getMessage().subscribe(
      msg => this.firstName = msg.text        
      
    );
  }


}
