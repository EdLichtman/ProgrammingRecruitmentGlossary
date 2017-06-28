import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Term } from "app/dataStorage/term";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/filter';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscriber } from "rxjs/Subscriber";

@Injectable()
export class TermRepository {
    public terms: FirebaseListObservable<Term[]>;
    private dbLocation: string = 'terms';
    public termsList: Term[];


    constructor(
        private af: AngularFireDatabase
    ) {
        this.initializeTerms();
    }

    private initializeTerms() {
        this.terms = this.af.list(this.dbLocation)
        // this.terms.forEach(terms => {
        //     terms.forEach(term => {
        //         term.parentTerms = new Subscriber<Object[]>();
        //         term.parentTerms.next(terms.filter(parent => {
        //             return term.parents && parent.termId == term.parents[0]["parentId"];
        //         }))
        //     })
        // })
        // var myObservable = new Subject();
        // myObservable.subscribe(value => console.log(value));
        // myObservable.next('foo');

        this.terms.subscribe(termsList => {
            termsList.forEach(term => {
                if (term.parents) {
                    term.parentTerms = new Subject<Term[]>().asObservable();
                    let parentsMap = term.parents.map(parent => {
                        return termsList.filter(parentTerm => {
                            return parent["termId"] == parentTerm.termId
                        })
                    })
                    term.parentTerms.subscribe(value => parentsMap);
                }
            })
            this.termsList = termsList;
        })


           /* .subscribe(terms => terms.forEach((term) => {
                term.parentTerms = new Subscriber<Object[]>();
                let parentTerms = new Array();
                term.parents && term.parents.forEach(element => {
                    let parent = new Term;
                    parentTerms.push(parent)
                    this.getTermById(parent, term.termId)
                    term.parentTerms.next(parentTerms)
                });
            }))*/
    }

    getTerms() {
        return this.terms;
    }

    getTermById(term: Term, termId: number){
        let terms = this.af.list(this.dbLocation, 
        {
            query: {
                orderByChild: "termId",
                equalTo: termId
            }
        });
        terms.subscribe(thisTerm => {
            term = (thisTerm);
        });
    }

    postTerm(term: Term) {
        let database = firebase.database().ref(this.dbLocation)
        database.push(term).once("child_added", function(snapshot) {
            alert(snapshot.val() + " added");
        });
    }

    

}