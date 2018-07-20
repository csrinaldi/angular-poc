import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_ROUTERS} from './app.routers';
import {TestModule} from './test/test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule.forRoot(),
    APP_ROUTERS

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
