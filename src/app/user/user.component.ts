import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" class="form-control" [(ngModel)]="userName">
  <p> Username: {{userName}}</p>
  <button class="btn btn-dark" [disabled]="!userName" (click)="userName = ''">Reset</button>
  `,
  styles: ['']
})
export class UserComponent implements OnInit {
  userName = ""
  constructor() { }

  //replaced with (click)="userName = ''"
  // onResetUserName() {
  //   this.userName= ""
  // }

  //replaced with inline [disabled]="!userName"
  // checkUserName() {
  //   if(!this.userName) {
  //     return true}
  //   return false
  // }
  ngOnInit(): void {
  }

}
