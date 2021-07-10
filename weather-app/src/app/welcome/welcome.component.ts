import { Component, Inject } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogOverview } from './dialog-overview/dialog-overview.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  name: string;
  location: string;
  nameValidations: FormGroup;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.nameValidations = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]]
    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '450px',
      height: '350px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.location = result;
    });
  }

  getCursor() {
    this.name? 'pointer' : 'not-allowed';
  }


  }



