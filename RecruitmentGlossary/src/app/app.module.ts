import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TermComponent } from './term/term.component';
import { AppRouter } from "./app.routes";
import { GlossaryComponent } from './glossary/glossary.component';
import { DatabaseService } from "./dataStorage/database.service";
import { TermRepository } from "app/dataStorage/termRepository.service";
import { AngularFireDatabase } from "angularfire2/database";
import { FirebaseApp } from "angularfire2/angularfire2";


@NgModule({
  imports: [
    BrowserModule,
    AppRouter
  ],
  declarations: [
    AppComponent,
    TermComponent,
    GlossaryComponent
  ],
  providers: [DatabaseService,
              TermRepository,
              AngularFireDatabase,
              FirebaseApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
