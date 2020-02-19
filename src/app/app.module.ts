import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ModalFormModule } from "projects/modal-form/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModalFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
