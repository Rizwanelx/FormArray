import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompnyListComponent } from './company/compny-list/compny-list.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonComponent } from './person/person-list/person/person.component';
import { CompnyComponent } from './company/compny-list/compny/compny.component';


@NgModule({
  declarations: [
    AppComponent,
    CompnyListComponent,
    PersonListComponent,
    PersonComponent,
    CompnyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
