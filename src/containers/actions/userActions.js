import {
  
    ADD_DETAILS,
    INSTANT_VIEW
  
  } from "./types";
  
  
  export const addContactDetails = (data) => (dispatch) => {
    console.log(data)
    dispatch({
      type: ADD_DETAILS,
      payload: data,
    });
  };
  
  export const viewContactDetails = (data) => (dispatch) => {
    console.log(data)
    dispatch({
      type: INSTANT_VIEW,
      payload: data,
    });
  };
  
  
  