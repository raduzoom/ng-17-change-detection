import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

(function () {
  const checkReady = () => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
      init();
    }
  };
  let stateCheck = setInterval(checkReady, 100);
  checkReady();

  function init() {
    console.log('init doc');

    setTimeout(() => {
      launchCommunication();
    }, 1000);
    function launchCommunication() {
      const $win = window as any;
      var $angularComponentRef = $win.angularComponentRef;
      var zone = $angularComponentRef.ngZone;
      var domMediator = $angularComponentRef.domMediator;

      zone.run(() => {
        var errorText = 'Bad request';

        /** @type DomToAngularMessage   */
        var obj = {
          eventType: 'ERROR_DIALOG',
          details: {
            errorDialogMessage: errorText,
          },
        };
        domMediator.emitEvent(obj);
      });
    }
  }
})();
