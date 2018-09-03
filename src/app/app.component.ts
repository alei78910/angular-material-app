import { Inject, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService, @Inject(SESSION_STORAGE) private storage: StorageService) {
    // translate.addLangs(["en", "fr"]);
    translate.setDefaultLang(environment.setting.system.language || "en_us");
    let lang: string = this.storage.get("setting.system.language");
    console.log(`lang:${lang}`)
    if (!lang) {

      let browserLang: string = translate.getBrowserLang();
      if (browserLang == "en") {
        lang = "en_us";
      } else {
        browserLang = translate.getBrowserCultureLang();
        switch (browserLang) {
          case "zh-HK":
            lang = "zh_hk";
            break;
          case "zh-CN":
            lang = "zh_cn";
            break;
          default:
            lang = "en_us";
            break;
        }
      }
      this.storage.set("setting.system.language", lang);
    }
    translate.use(lang);
  }
}
