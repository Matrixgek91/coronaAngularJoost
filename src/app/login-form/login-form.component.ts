import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Login } from '../login';
import { Registration } from '../registration';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent implements OnInit {

  @Input()
  dialog: LoginDialogComponent

  login = new Login()

  constructor(public loginService: LoginService) { }

  verify() {
    this.loginService.verify(this.login).subscribe(
      data => {if (data.length == 0){
        //not logged in
        console.log("Inlog mislukt")
      } else {
        data[0].firstName
        //logged in
        console.log("Inlog gelukt")
      }     
      });
  }

  ngOnInit(): void {
  }

}
