import { ADD_STOCK, DATA_LOADED } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_STOCK) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      } else if (action.type === DATA_LOADED) {
  
        let tickList = [['date','spot','sma5','sma10']];
        action.payload.forEach((item, index) => {
          var tick = []
          tick.push(item.date)
          tick.push(item.spot)
          tick.push(item.sma5)
          tick.push(item.sma20)
          
          tickList.push(tick)
          
        });
        

        action.payload = tickList



      }        

      return next(action);
    };
  };
}
