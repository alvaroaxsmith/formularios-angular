import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

@NgModule({
  declarations: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  providers: [

  ]
})
export class FormModule { }
