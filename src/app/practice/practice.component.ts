import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  visibility = "hidden";
  counter = 0;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onTogle() {
    this.counter++;
    this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
    this.log.push(new Date);
  }

  getVisibility() {
    return this.visibility;
  }
}
