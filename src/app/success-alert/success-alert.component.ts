import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  status: string;
  alerts = ['online', 'offline'];

  constructor() {
    this.status = Math.random() > 0.5 ? "online" : "offline";
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.status === "online" ? "green" : "red";
  }

  onAddServer() {
    this.alerts.push("online");
  }
}
