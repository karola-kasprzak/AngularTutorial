import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  visible = true;
  counter = [];

  constructor() { }

  onButtonClick() {
    this.visible=!this.visible;
    this.counter.push(this.counter.length+1);
  }

  ngOnInit(): void {
  }

}
