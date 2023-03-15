import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormViewChildComponent } from './form-view-child/form-view-child.component';
import { FormNgFormParametriesComponent } from './form-ng-form-parametries/form-ng-form-parametries.component';
import { FormReactiveFormsModuleComponent } from './form-reactive-forms-module/form-reactive-forms-module.component';
import { FormFormBuilderComponent } from './form-form-builder/form-form-builder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAppComponent } from './form-app/form-app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormViewChildComponent,
    FormNgFormParametriesComponent,
    FormReactiveFormsModuleComponent,
    FormFormBuilderComponent,
    FormAppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
