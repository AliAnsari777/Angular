import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  createNewServer: String = "Server is not created";

  constructor() {
    this.allowNewServer = false;

    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.createNewServer = "New Server Created!";
  }
}
