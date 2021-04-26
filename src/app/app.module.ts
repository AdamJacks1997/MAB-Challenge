import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaderboardService } from 'src/services/leaderboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    InlineSVGModule
  ],
  providers: [
    LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
