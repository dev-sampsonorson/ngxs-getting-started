export class SendGreeting {
  static readonly type = '[Greeting] Send greeting';

  public payload: string;


  constructor(payload: string) {
    this.payload = payload;
  }
}
