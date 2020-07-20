import {
 
  ADD_DETAILS,
  INSTANT_VIEW
} from "../actions/types";
 import contactlist from "../../assets/StubJson";



const initialState = {
  
  add_details:contactlist,
  view_details:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
 
    case ADD_DETAILS:
      return {
        ...state,
        add_details: action.payload,
      };
      case INSTANT_VIEW:
      return {
        ...state,
        view_details: action.payload,
      };

    default:
      return state;
  }
}
 
    
   