import { DIALOG_CONFIRM } from "../ui/Dialog";
import { DIALOG_ALERT } from "../ui/Dialog";
import { DIALOG_HIDE } from './../ui/Dialog';

export const mainState = {
 
    dialog: { 
      type: DIALOG_HIDE, 
      message: "", 
      callback: null 
    }
      
  };
  
const mainReducer = (state = mainState, action) => {
    switch(action.type){
      case DIALOG_ALERT:
      case DIALOG_CONFIRM:
      case DIALOG_HIDE:
          return Object.assign({}, state, {dialog: action});
                
      default: 
          return state;
    }
  };

    
  export default mainReducer;
