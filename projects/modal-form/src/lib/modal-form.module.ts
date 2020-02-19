import { NgModule } from "@angular/core";
import { ModalFormComponent } from "./modal-form.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";

@NgModule({
  declarations: [ModalFormComponent, DynamicFormComponent],
  imports: [],
  exports: [ModalFormComponent]
})
export class ModalFormModule {}
