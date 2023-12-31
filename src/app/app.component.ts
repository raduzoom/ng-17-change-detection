import { Component, Injector, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DomMediatorService } from './util/services/dom-mediator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-17-starter';
  constructor(
    private domMediatorService: DomMediatorService,
    private zone: NgZone,
    private injector: Injector,
  ) {
    this.domMediatorService.init(this.injector, this.zone);
  }
}
