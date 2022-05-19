import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GreetingSelector } from '../+state/greeting.selector';
import { GreetingState } from '../+state/greeting.state';

@Component({
  selector: 'so-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  @Select(GreetingSelector.message) message$!: Observable<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
