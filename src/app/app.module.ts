import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TabGroupPlaygroundModule } from './tab-group-playground/tab-group-playground.module';
import { TabGroupRoutedPlaygroundModule } from './tab-group-routed-playground/tab-group-routed-playground.module';
import { TabGroupPlaygroundFormComponent } from './tab-group-playground/tab-group-playground-form/tab-group-playground-form.component';
import { TabGroupRoutedPlaygroundFormComponent } from './tab-group-routed-playground/tab-group-routed-playground-form/tab-group-routed-playground-form.component';

const routes = [{
  path: 'tab-group-playground',
  component: TabGroupPlaygroundFormComponent
}, {
  path: 'tab-group-routed-playground',
  component: TabGroupRoutedPlaygroundFormComponent
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    TabGroupPlaygroundModule,
    TabGroupRoutedPlaygroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
