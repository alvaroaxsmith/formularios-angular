import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})

export class TemplateDrivenFormComponent implements OnInit {

  usuario: User | any;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new User();

  }
  submit() {
    console.log(this.usuario);
  }
}
