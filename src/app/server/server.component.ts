import { Component } from '@angular/core';

// Component is app component decorator
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // type designation not required
  // serverId: number = 10;
  // serverStatus: string = 'offline';
  serverId = 10;
  serverStatus = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }
}
