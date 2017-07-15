import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// angular will not scan files to find components; those components must be manually added here
// this grabs the ts file
import { ServerComponent } from './server/server.component';

// bootstrap is the component the app should be aware of when the base application starts
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
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
