import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable(
  //{
  //providedIn: 'root'
  //}
)

export class DataService {

  private goals = new BehaviorSubject<any>(['I want to go home', 'I want to live in Japan', 'kick the kids']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
