import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is a warning message</p>
    `,
    styles: [`
      p{
          padding: 5px;
          border: 1px solid red;
          background-color: lightcoral;
      }  
    `]
})
export class WarningAlertComponenet {

}