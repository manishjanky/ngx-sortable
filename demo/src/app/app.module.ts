import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSortableModule } from 'ngx-sortable';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxSortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
