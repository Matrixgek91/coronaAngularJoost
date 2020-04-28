import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

/* News API import */

import { NewsApiService } from './news-api.service';

/* Materials components imports */

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




/* End materials imports */

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FrontPageComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
