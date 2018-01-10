import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import { Facebook,FacebookLoginResponse  } from '@ionic-native/facebook';


import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public database: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private fb: Facebook, 
    private platform: Platform
    ) {

        afAuth.authState.subscribe(user => {
            if (!user) {
             
              return;
            }else{
                this.navCtrl.setRoot(TabsPage, {
                   
                });
            }
               
          });

  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then((res : FacebookLoginResponse) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        
        return firebase.auth().signInWithCredential(facebookCredential);
        
      })
    }
    else {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => 
        console.log(res));
    }
   
  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
