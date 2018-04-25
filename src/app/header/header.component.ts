import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus = ["dashboard","solutions","admin"];
  lang = ["english","hindi","marathi"];
  
  constructor(private translate: TranslateService) {
    translate.addLangs(["english","hindi","marathi"]);
    translate.setDefaultLang('english');
    translate.use('english');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    console.log(lang);
  }
  ngOnInit(){}

}
