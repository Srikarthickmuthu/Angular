import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyFirstComponent } from './lazy-first/lazy-first.component';
import { LazySecondComponent } from './lazy-second/lazy-second.component';

@NgModule({
  declarations: [
    LazyFirstComponent,
    LazySecondComponent,
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
