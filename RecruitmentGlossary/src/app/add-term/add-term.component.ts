import { Component, OnInit } from '@angular/core';
import { TermRepository } from "app/dataStorage/termRepository.service";
import { Term } from "app/dataStorage/term";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.css']
})
export class AddTermComponent implements OnInit {

  newTerm: Term;
  existingTerms: Object[];
  terms: FirebaseListObservable<Term[]>;

  constructor(private termRepo: TermRepository) { }

  ngOnInit() {
    this.terms = this.termRepo.getTerms();
    this.newTerm = new Term;
    this.existingTerms = new Array();
    this.terms.subscribe(allTerms => 
      this.existingTerms = 
        allTerms.map(x => 
          {
            return {termId:x.termId,termName:x.termName,isChecked:false}
          }
        )
    )
  }

  addTerm() {
    this.termRepo.postTerm(this.newTerm);
    this.existingTerms.push(this.newTerm);
  }

  addOrRemoveParent(index:number) {
    this.existingTerms[index]["isChecked"] = !this.existingTerms[index]["isChecked"]
  }

}
