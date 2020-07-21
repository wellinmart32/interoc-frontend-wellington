import { Injectable } from '@angular/core';

import { UserI } from '../../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userData: Observable<firebase.User>;

    // Problema que no reconoce AngularFireAuth
    // constructor(private afAuth: AngularFireAuth) {
    //      this.userData = afAuth.authState;
    // }

    loginByEmail(user: UserI) {
        // const { email, password } = user;
        // this.afAuth.auth.signInWithEmailAndPassword(email, password)
        // .then(res => {
        //     console.log('successfully', res);
        // })
        // .catch(err => console.log('Error', err));
    }

    logout() {
        // this.afAuth.auth.signOut();
    }
}