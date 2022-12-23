import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgComponent } from '../Templates/SVGtemplate/svg.component';
import { pipes } from '../Templates/Pipes/pipes.component';

const routes: Routes = [
  {path:'SVGtemplates',component:SvgComponent},
  {path:'PipeTemplates',component:pipes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}