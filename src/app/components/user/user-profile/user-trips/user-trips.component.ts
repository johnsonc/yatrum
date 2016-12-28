import * as fromRoot from './../../../../reducers/index';
import { Store } from '@ngrx/store';
import { Trip } from './../../../../models/trip';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.scss']
})
export class UserTripsComponent implements OnInit {
  userTrips$: Observable<Trip[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.userTrips$ = this.store.select(fromRoot.getUserTripsCollection);
   }

  ngOnInit() {
  }

}