import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<RegisterFormComponent>) { }

  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
