import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private contentService: ContentService,
    private viewContent: ViewContainerRef) { }

  ngOnInit() {
    this.contentService.setRootView(this.viewContent);
    this.contentService.addComponent();
  }

}
