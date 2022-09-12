import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacacoComponent } from './components/macaco/macaco.component';
import { MacacoLocoComponent } from './components/macaco-loco/macaco-loco.component';

@NgModule({
  declarations: [
    AppComponent,
    MacacoComponent,
    MacacoLocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
