import { Component, OnInit } from '@angular/core';
import { TermRepository } from "app/dataStorage/termRepository.service";
import { Term } from "app/dataStorage/term";
import * as firebase from 'firebase';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css'],
  providers: [TermRepository]
})
export class GlossaryComponent implements OnInit {

  termRepo: TermRepository;
  terms: any;

  constructor(
    private termSVC: TermRepository
  ) { 
    this.termRepo = termSVC;
  }

  ngOnInit() {
    this.terms = this.termRepo.getTerms();
    
  }

}