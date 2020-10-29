import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  createNewServer: String = "Server is not created";
  serverName: String = 'server';
  serverCreated: boolean = false;

  constructor() {
    this.allowNewServer = false;

    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.createNewServer = "New Server Created! its name is: " + this.serverName;
  }

  onUserInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
