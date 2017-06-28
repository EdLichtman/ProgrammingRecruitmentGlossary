import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouter } from "app/app.routes";
import { AngularFireModule } from "angularfire2/angularfire2";
import { config } from "app/app.config";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppComponent } from "app/app.component";
import { TermComponent } from "app/term/term.component";
import { GlossaryComponent } from "app/glossary/glossary.component";
import { TermRepository } from "app/dataStorage/termRepository.service";
import { AddTermComponent } from './add-term/add-term.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouter,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    TermComponent,
    GlossaryComponent,
    AddTermComponent
  ],
  providers: [TermRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
