import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// angular will not automatically scan files to find components; components must be manually added here
// this grabs the ts file
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// bootstrap is the component the app should be aware of when the base application starts
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// AppComponent is TypeScript class; transformed into something with NgModule decorator
export class AppModule { }
