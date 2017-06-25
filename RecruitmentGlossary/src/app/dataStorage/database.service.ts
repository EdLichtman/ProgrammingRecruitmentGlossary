import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { firebaseConfig } from "app/app.config"

@Injectable()
export class DatabaseService {

    constructor( private router: Router ) {
        if (!firebase.apps.length) {
            this.initializeFireBase();
        }
    }
    initializeFireBase() {
        firebase.initializeApp({
            apiKey: firebaseConfig.apiKey,
            authDomain: firebaseConfig.authDomain,
            databaseURL: firebaseConfig.databaseURL,
            projectId: firebaseConfig.projectId,
            storageBucket: firebaseConfig.storageBucket,
            messagingSenderId: firebaseConfig.messagingSenderId
        })
    }

}
  