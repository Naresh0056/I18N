import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test-ng";
  browserLang;
  constructor(private _langService: TranslateService) {
    this.setDefaultLang();
    this.languageChanged();
  }
  private setDefaultLang() {
    this._langService.addLangs(["en", "de"]);
    // this._langService.setDefaultLang("de");
    this._langService.use("en");
    this.browserLang = this._langService.getBrowserLang();
    debugger;
  }
  changeLanguage(val) {
    console.log(val.value);
    this._langService.use(val.value);
  }
  languageChanged() {
    this._langService.use(
      this.browserLang.match(/de|en/) ? this.browserLang : "en"
    );
  }
}
