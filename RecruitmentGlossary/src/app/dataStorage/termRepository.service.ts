import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { DatabaseService } from "./database.service";
import { Term } from "app/dataStorage/term";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TermRepository extends DatabaseService {
    public terms: Term[] = new Array<Term>();
    public termsSubject: Subject<Term[]>;

    constructor(private tRouter: Router) {
        super(tRouter);
        this.termsSubject = new Subject<Term[]>();
        this.initializeTerms();
    }

    private initializeTerms() {
        let dbRef = firebase.database().ref('terms/');
        
        dbRef.once('value')
            .then((snapshot) => {
                let tmp: string[] = snapshot.val();
                let terms = Object.keys(tmp).map(key => tmp[key])
                this.termsSubject.next(terms);
                console.log(this.terms)
            })
        this.termsSubject.subscribe(
            terms => this.terms = terms
        );
    }



    getTerms() {
        return this.termsSubject.asObservable();
    }

    getTermById(termId: number): any {
        return this.terms.filter(function(term) { return term.termId === termId})[0]

    }

    getChildrenByTermName(termName: string) {

    }

    getChildrenById(termId: number) {

    }

    getParentsByTermName(termName: string) {

    }

    getParentsByTermId(termId: number) {

    }

}