import { NgModule } from "@angular/core";
import { ModalFormComponent } from "./modal-form.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxFormControlErrorsModule } from "ngx-form-control-errors";

@NgModule({
  declarations: [ModalFormComponent, DynamicFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxFormControlErrorsModule,
    NgbModule
  ],
  exports: [ModalFormComponent]
})
export class ModalFormModule {}
