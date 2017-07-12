import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrideximRoutingModule } from './gridexim-routing.module';

import { Gridexim as GrideximComponent } from './gridexim';

@NgModule({
  declarations: [
    GrideximComponent
  ],
  imports: [
    GrideximRoutingModule,
    CommonModule
  ]
})
export class GrideximModule { }
