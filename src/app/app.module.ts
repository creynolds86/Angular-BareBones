import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { appRouting } from './app.routing';

import { AppConfig } from './app.config';
import { DataService } from './shared/services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting.routes
  ],
  declarations: [
    AppComponent,
    appRouting.components
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfig) => () => config.load(),
      deps: [ AppConfig ],
      multi: true
    },
    DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
