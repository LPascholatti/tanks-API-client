import { TANKS_FETCH } from '../actions';

export default function (state=[], action = {}) {
  switch(action.type) {
    case TANKS_FETCH: {
      return action.payload
    }
    default:
      return state
  }
}