import { Component, OnInit, Input } from '@angular/core';

import { RegistrationService } from '../registration.service';
import { Registration } from '../registration'
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [RegistrationService]
})
export class RegisterFormComponent implements OnInit {

  @Input()
  dialog: RegisterDialogComponent

  registration = new Registration()


  constructor (public registrationService: RegistrationService) { }
  
  save() {
    this.registrationService.save(this.registration).subscribe(
    () => this.dialog.close()
    );
    

  }

  
  ngOnInit(): void {
  }

}
