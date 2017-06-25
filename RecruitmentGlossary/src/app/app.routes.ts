import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermComponent } from "./term/term.component";
import { GlossaryComponent } from "app/glossary/glossary.component";

export const routes: Routes = [
    { path: 'terms/:id', component: TermComponent},
    { path: '', component: GlossaryComponent},
    { path: '*', component: GlossaryComponent}
    
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);