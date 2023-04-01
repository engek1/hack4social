import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing.module';
import { App } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { OverviewComponent } from './overview/overview.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule
  ],
  declarations: [App, OverviewComponent, CategoryComponent],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
