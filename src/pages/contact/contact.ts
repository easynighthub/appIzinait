import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth, 
    private platform : Platform
  ) {

  }

  signOut() {
    this.afAuth.auth.signOut();
    
    this.navCtrl.push(TabsPage,{

    })
    this.navCtrl.pop();
    this.navCtrl.push(LoginPage, {
     
                   
    });
    




  }
  


  

}
