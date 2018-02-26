import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { LaneComponent } from './components/lane/lane.component';
import { CardComponent } from './components/card/card.component';

import { ApiService } from './shared/api.service';
import { LocalStorage } from './shared/local-storage.service';
import { HeaderComponent } from './components/header/header.component'

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LaneComponent,
    CardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
