import { Component } from '@angular/core';

// Component is app component decorator
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // type designation not required
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
