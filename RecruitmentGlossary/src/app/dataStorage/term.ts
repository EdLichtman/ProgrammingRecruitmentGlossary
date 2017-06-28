import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class Term {
    constructor(
        public termId?: number,
        public termName?: string,
        public termDescription?: string,
        public parents?: Object[],
        public parentTerms?: Observable<Object[]>

    ){}
}