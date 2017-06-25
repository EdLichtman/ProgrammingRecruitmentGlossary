import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TermRepository } from "app/dataStorage/termRepository.service";
import { Term } from "app/dataStorage/term";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  termId: number;
  term: Term;
  constructor(
    private route: ActivatedRoute,
    private termRepo: TermRepository 
  ) { 
    this.termId = Number(route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
