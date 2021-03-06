import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test server"

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer () {
    this.serverCreationStatus = "New Server was Added. Name is " + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {
  }

}
