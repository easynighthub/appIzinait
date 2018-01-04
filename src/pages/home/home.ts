import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public database: AngularFireDatabase
  ) {

    this.tasksRef = this.database.list('events');
    this.tasks = this.tasksRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

}
