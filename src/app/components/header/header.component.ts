import { Component, OnInit } from '@angular/core';
import {
  DomMediatorService,
  DomToAngularMessage,
  DomToAngularMessageType,
} from '../../util/services/dom-mediator.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isShowMore = false;

  constructor(private domMediatorService: DomMediatorService) {}

  ngOnInit() {
    console.log('init');
    this.domMediatorService.eventSource.subscribe((e: DomToAngularMessage) => {
      if (e.eventType === DomToAngularMessageType.ERROR_DIALOG) {
        console.log('this.isShowMore should show more');
        this.isShowMore = true;
      }
    });
  }
}
