import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" class="form-control" [(ngModel)]="userName">
  <p> Username: {{userName}}</p>
  <button class="btn btn-dark" [disabled]="checkUserName()" (click)="onResetUserName()">Reset</button>
  `,
  styles: ['']
})
export class UserComponent implements OnInit {
  userName = ""
  constructor() { }
  onResetUserName() {
    this.userName= ""
  }

  checkUserName() {
    if(!this.userName) {
      return true}
    return false
  }
  ngOnInit(): void {
  }

}
