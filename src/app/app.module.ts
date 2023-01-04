import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { parent} from './Components/Interaction/P-C_Input-bindings/parent.component';
import { child } from './Components/Interaction/P-C_Input-bindings/child.component';
import { setParent } from './Components/Interaction/Setter/parent.component';
import { setChild } from './Components/Interaction/Setter/child.component';
import { main } from './Components/Encapsulation/main.component';
import { None } from './Components/Encapsulation/none.component';
import { Emulated } from './Components/Encapsulation/emulated.component';
import { shadow } from './Components/Encapsulation/shadowDom.component';
import { First } from './Components/ContentProjection/first.component';
import { second } from './Components/ContentProjection/second.component';
import { third } from './Components/ContentProjection/third.component';
import { interpolation } from './Templates/Interpolation/interpolation.component';
import { attribute } from './Templates/Bindings/AttributeBinding/attribute.component';
import { classBinding } from './Templates/Bindings/ClassStyle/classBinding.component';
import { Property } from './Templates/Bindings/Property/property.component';
import { event } from './Templates/Bindings/EventBinding/event.component';
import { twoWay } from './Templates/Bindings/TwoWay/twoWay.component';
import { pipes } from './Templates/Pipes/pipes.component';
import { CustompipesPipe } from './Templates/Pipes/customPipes/custompipes.pipe';
import { tempVariable } from './Templates/Varaibles/tempVariable.component';
import { SvgComponent } from './Templates/SVGtemplate/svg.component';
import { structural } from './Directives/Structural/structural.component';
import { HighlightDirective } from './Directives/Attribute/highlight.directive';
import { builtIn } from './Directives/BuildInDirective/builtIn.component';
import { CustomStructuralDirective } from './Directives/Structural/custom-structural.directive';
import { DependancyComponent } from './DependancyInjection/dependancy/dependancy.component';
import { FirstComponent } from './Routing/first/first.component';
import { SecondComponent } from './Routing/second/second.component';
import { error } from './Routing/error.component';
import { forms } from './Forms/forms.component';
import { HttpComponent } from './Http/http/http.component';
import { LifecycleComponent } from './Components/Lifecycle/lifecycle.component';
import { mainLife } from './Components/Lifecycle/main.component';
import { ReactiveComponent } from "./Forms/reactive/reactive.component";
import { DynamicHost } from './Components/Dynamic/dynamic.directive';
import { dynamic } from './Components/Dynamic/dynamic.component';
import { dynamic1 } from './Components/Dynamic/dynamic1.component';
import { MainDynamicComponent } from './Components/Dynamic/main-dynamic/main-dynamic.component';

@NgModule({
    declarations: [
        AppComponent,
        parent,
        child,
        setParent,
        setChild,
        First,
        second,
        third,
        main,
        None,
        Emulated,
        shadow,
        interpolation,
        attribute,
        classBinding,
        Property,
        event,
        twoWay,
        pipes,
        CustompipesPipe,
        tempVariable,
        SvgComponent,
        structural,
        HighlightDirective,
        builtIn,
        CustomStructuralDirective,
        DependancyComponent,
        FirstComponent,
        SecondComponent,
        error,
        forms,
        HttpComponent,
        LifecycleComponent,
        mainLife,
        ReactiveComponent,
        DynamicHost,
        dynamic,
        dynamic1,
        MainDynamicComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    entryComponents:[dynamic,dynamic1]
})
export class AppModule {
  title='AngularProject';
}
