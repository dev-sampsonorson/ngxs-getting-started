import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { SendGreeting } from "./greeting.action";
import { GreetingStateModel } from "./greeting.model";

export const GREETING_STATE_TOKEN =
   new StateToken<GreetingStateModel>('GREETING_STATE_TOKEN');

@State<GreetingStateModel>({
  name: GREETING_STATE_TOKEN,
  defaults: {
    message: 'Hello'
  }
})
export class GreetingState {

  @Action(SendGreeting)
  sendGreeting(context: StateContext<GreetingStateModel>, action: SendGreeting) {
    const state = context.getState();
    const newState = {
      ...state,
      message: action.payload
    }
    context.setState(newState);
  }


}
