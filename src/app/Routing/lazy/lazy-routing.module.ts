import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyFirstComponent } from './lazy-first/lazy-first.component';
import { LazySecondComponent } from './lazy-second/lazy-second.component';


const routes: Routes = [
  {path:'lazyFirst',component:LazyFirstComponent},
  {path:'lazySecond',component:LazySecondComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
