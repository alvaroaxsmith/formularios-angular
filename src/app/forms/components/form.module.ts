import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { FormsDialogComponent } from './forms-dialog/forms-dialog.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FormsDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FormsDialogComponent
  ],
  providers: [

  ]
})
export class FormModule { }
