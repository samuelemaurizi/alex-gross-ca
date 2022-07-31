import React, { useReducer } from 'react';

import FormContext from './formContext';
import FormReducer from './formReducer';
import { SET_USER_DATA, SET_SCORE } from '../types';

const FormState = (props) => {
  const initialState = {
    userData: {},
    score: 0,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const setUserData = (data) => {
    dispatch({
      type: SET_USER_DATA,
      payload: data,
    });
  };

  const addScore = (score) => {
    dispatch({
      type: SET_SCORE,
      payload: score,
    });
  };

  return (
    <FormContext.Provider
      value={{
        userData: state.userData,
        score: state.score,
        setUserData,
        addScore,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
