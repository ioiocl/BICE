import { ADD_STOCK } from "../constants/action-types";

const initialState = {
  spotPrices: [],
  spotPrices: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_STOCK) {
    return Object.assign({}, state, {
      spotPrices: state.spotPrices.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      spotPrices: state.spotPrices.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
