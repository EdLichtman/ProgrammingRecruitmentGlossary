import { Observable } from "rxjs/Observable";

export interface Query {
    [key: string]: any;
    orderByKey?: boolean | Observable<boolean>;
    orderByPriority?: boolean | Observable<boolean>;
    orderByChild?: string | Observable<string>;
    orderByValue?: boolean | Observable<boolean>;
    equalTo?: any | Observable<any>;
    startAt?: any | Observable<any>;
    endAt?: any | Observable<any>;
    limitToFirst?: number | Observable<number>;
    limitToLast?: number | Observable<number>;
}