import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/classes/forms';
import { FormsDialogComponent } from '../forms-dialog/forms-dialog.component';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})

export class TemplateDrivenFormComponent implements OnInit {

  usuario: User = new User;

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.usuario = new User();

  }
  submit() {
    console.log(this.usuario);
  }

  showDialog(): void {
    let ref = this.dialog.open(FormsDialogComponent)

    ref.componentInstance.nome = this.usuario.nome
    ref.componentInstance.sobrenome = this.usuario.sobrenome
    ref.componentInstance.username = this.usuario.username
    ref.componentInstance.cpf = this.usuario.cpf
    ref.componentInstance.telefone = this.usuario.telefone
    ref.componentInstance.endereco = this.usuario.endereco
    ref.componentInstance.complemento = this.usuario.complemento
    ref.componentInstance.senha = this.usuario.senha
    ref.componentInstance.senhaConfirma = this.usuario.senhaConfirma

  }
}
