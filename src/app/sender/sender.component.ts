import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SendGreeting } from '../+state/greeting.action';

@Component({
  selector: 'so-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: ['']
    })
  }

  onSendGreeting() {
    this.store.dispatch(
      new SendGreeting(this.form.value.message)
      )
  }

}
