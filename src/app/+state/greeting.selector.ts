import { Selector } from "@ngxs/store";
import { GreetingStateModel } from "./greeting.model";
import { GREETING_STATE_TOKEN } from "./greeting.state";

export class GreetingSelector {
  @Selector([GREETING_STATE_TOKEN])
  static message(greetingState: GreetingStateModel) {
    return greetingState.message;
  }
}
