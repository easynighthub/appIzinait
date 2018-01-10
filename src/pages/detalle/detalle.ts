import { Component } from '@angular/core';
import {  NavController,AlertController,NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html'
})
export class DetallePage {
  selectedItem: any;
  eventSerRef: AngularFireList<any>;
  eventSer: Observable<any[]>;


  constructor(
      public navParams: NavParams,
      public navCtrl: NavController,
      public alertCtrl: AlertController,
      public database: AngularFireDatabase,
      public afAuth: AngularFireAuth,
      private fb: Facebook, 
      private platform: Platform) {
   
        
       
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);

    this.eventSerRef = this.database.list('eventServices');
    this.eventSer = this.eventSerRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    console.log(this.eventSer );

  
  }

 
}