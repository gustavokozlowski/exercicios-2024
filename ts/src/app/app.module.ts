import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
