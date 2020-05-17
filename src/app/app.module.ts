import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LangTranslateModule } from "./lang-translate.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LangTranslateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
