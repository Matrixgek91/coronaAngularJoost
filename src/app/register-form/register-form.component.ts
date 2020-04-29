import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RegistrationService } from '../registration.service';
import { Registration } from '../registration'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [RegistrationService]
})
export class RegisterFormComponent implements OnInit {

  registration = new Registration()

  //constructor(public dialogRef : MatDialogRef<RegisterFormComponent>) { }

  constructor (public registrationService: RegistrationService) { }
  
  save() {
    console.log(this.registration.firstName);
    this.registrationService.save(this.registration).subscribe(
      
    );
  }

  
  ngOnInit(): void {
  }

}
