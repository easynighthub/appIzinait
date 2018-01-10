import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';




import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
      public navCtrl: NavController,
      private afAuth: AngularFireAuth, 
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
   let provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth().signInWithRedirect(provider).then(() => {
firebase.auth().getRedirectResult().then((result)=>{
console.log(result);
}).catch(function(error){
  console.log(error);
})
   });
   
  }

  signOut() {
    this.afAuth.auth.signOut();
  }


}
