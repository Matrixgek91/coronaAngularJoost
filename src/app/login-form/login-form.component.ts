import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Login } from '../login';
import { ViaService } from '../via-service/via.service';


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

  constructor(public loginService: LoginService, public viaService: ViaService) { }

  


  verify() {
    this.loginService.verify(this.login).subscribe(
      data => {if (data.length == 0){
        //not logged in
        console.log("Inlog mislukt")
      } else {
        //logged in
        sessionStorage.setItem('userId', (data[0].userId).toString())
        sessionStorage.setItem('firstName', data[0].firstName)

        this.viaService.sendMessage(data[0].firstName)

        //root.refreshLoginStatus()
        
        console.log("Inlog gelukt")
        this.dialog.close()
      }     
      });
  }

  ngOnInit(): void {
    
  }

}
