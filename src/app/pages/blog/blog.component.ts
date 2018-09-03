import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  items: any = [];

  constructor(translate: TranslateService, private service: BlogService) {
    // let lan = translate.currentLang
    // .defaultLang
  }

  ngOnInit() {
    this.service.getIssues().subscribe(items => {
      this.items = items;
    });
  }
}
