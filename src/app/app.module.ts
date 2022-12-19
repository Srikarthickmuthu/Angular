import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { parent } from './Interaction/P-C_Input-bindings/parent.component';
import { child } from './Interaction/P-C_Input-bindings/child.component';
import { setParent } from './Interaction/Setter/parent.component';
import { setChild } from './Interaction/Setter/child.component';
//import { dataParent } from './DataSharing/parent.component';
//import { dataChild } from './DataSharing/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { None } from './Encapsulation/none.component';
 import { Emulated } from './Encapsulation/emulated.component';
import { shadow } from './Encapsulation/shadowDom.component';
import { First } from './ContentProjection/first.component';
import { second } from './ContentProjection/second.component';
import { third } from './ContentProjection/third.component';
import { interpolation } from './Templates/Interpolation/interpolation.component';
import { Property } from './Templates/Bindings/Property/property.component';
import { event } from './Templates/Bindings/EventBinding/event.component';




@NgModule({
  declarations: [
    AppComponent,
    parent,
    child,
    setParent,
    setChild,
    //dataChild,
    //dataParent,
    LifecycleComponent,
    First,
    second,
    third,
    None,
    Emulated,
    shadow,
    interpolation,
    Property,
    event
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title='AngularProject';
}
