import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
