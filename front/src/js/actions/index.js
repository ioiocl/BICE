import { ADD_STOCK } from "../constants/action-types";

export function addStock(payload) {
  return { type: ADD_STOCK, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3001/api/quotes")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
