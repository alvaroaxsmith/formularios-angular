import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  name: string = ''
  lastName: string = ''
  email: string = ''

  constructor(private snack:MatSnackBar){

  }


  submit():void{

    console.log(`Name: ${this.name}`)
    console.log(`Last Name: ${this.lastName}`)
    console.log(`email: ${this.email}`)

    this.snack.open('Você foi cadastrado!', 'ok', {duration: 3000});

  }

}
