import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { parent } from './Interaction/P-C_Input-bindings/parent.component';
import { child } from './Interaction/P-C_Input-bindings/child.component';
import { setParent } from './Interaction/Setter/parent.component';
import { setChild } from './Interaction/Setter/child.component';
//import { None } from './none.component';
// import { Emulated } from './Encapsulation/emulated.component';
// import { shadow } from './Encapsulation/shadowDom.component';

@NgModule({
  declarations: [
    AppComponent,
    parent,
    child,
    setParent,
    setChild
    // None,
    // Emulated,
    // shadow
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
