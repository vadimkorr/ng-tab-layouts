import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDataComponent } from './tab-data/tab-data.component';
import { TabLinkComponent } from './tab-link/tab-link.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { IsActiveDirective } from './is-active/is-active.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TabDataComponent,
    TabLinkComponent,
    TabGroupComponent,
    IsActiveDirective
  ],
  declarations: [
    TabDataComponent,
    TabLinkComponent,
    TabGroupComponent,
    IsActiveDirective
  ]
})
export class TabGroupModule { }
