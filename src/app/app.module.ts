import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponenet } from './warning/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponenet
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
