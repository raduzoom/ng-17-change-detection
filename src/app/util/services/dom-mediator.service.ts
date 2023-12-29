import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DomMediatorService {
  eventSource = new Subject<DomToAngularMessage>();
  event$ = this.eventSource.asObservable();
  angularComponentRef: any;

  constructor() {}

  init(injector: Injector) {
    const dummyElement = document.createElement('div');
    const angularComponentRef = {
      injector: injector,
      domListener: dummyElement,
      domMediator: injector.get(DomMediatorService),
    };
    (window as any).angularComponentRef = angularComponentRef;

    this.angularComponentRef = angularComponentRef;
  }

  emitEvent(data: DomToAngularMessage) {
    this.eventSource.next(data);

    const customEvent = new CustomEvent('angularMediatorEvent', { detail: 'testdata to dom' });
    this.angularComponentRef.domListener.dispatchEvent(customEvent);
  }
}

export enum DomToAngularMessageType {
  ERROR_DIALOG = 'ERROR_DIALOG',
  FORM_SAVED = 'FORM_SAVED',
  TRIGGER_DIALOG_EXPORT_FORM = 'TRIGGER_DIALOG_EXPORT_FORM',
}
export type DomToAngularMessage = {
  eventType: DomToAngularMessageType | string;
  details: {
    errorDialogMessage?: string;
  };
};
