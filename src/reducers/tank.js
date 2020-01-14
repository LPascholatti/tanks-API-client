import { TANK_FETCH } from '../actions';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case TANK_FETCH:{
      return action.payload
    }
    default:
      return state
  }
}

export default reducer