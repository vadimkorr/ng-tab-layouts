import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupModule } from './tab-group/tab-group.module';
import { TabGroupRoutedModule } from './tab-group-routed/tab-group-routed.module';

@NgModule({
  imports: [
    CommonModule,
    TabGroupModule,
    TabGroupRoutedModule
  ],
  exports: [
    TabGroupModule,
    TabGroupRoutedModule
  ],
  declarations: []
})
export class LayoutModule { }
