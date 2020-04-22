import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Materials components imports */

import { MatSliderModule } from '@angular/material/slider';
import { NewsFeedComponent } from './news-feed/news-feed.component';

/* End materials imports */

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
