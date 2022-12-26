import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { error } from './error.component';
import { SvgComponent } from '../Templates/SVGtemplate/svg.component';
import { pipes } from '../Templates/Pipes/pipes.component';


const routes: Routes = [
  {
    path: 'FirstComponent', component: FirstComponent,
    children: [
      { path: 'child-a',title:'SVGComponent next', component: SvgComponent },
      { path: 'child-b',title:'pipes Next', component: pipes }
    ]
  },

  { path: 'SecondComponent', component: SecondComponent },
  
  {path:'lazy',loadChildren:()=>import('../Routing/lazy/lazy.module').then(m=>m.LazyModule)},

  { path: '', redirectTo: '/SecondComponent', pathMatch: 'full' },
  { path: '**', component: error },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}