import React, { useReducer } from 'react';

import FormContext from './formContext';
import FormReducer from './formReducer';
import { SET_USER_DATA, SET_SCORE, DELETE_USER_DATA } from '../types';

const FormState = (props) => {
  const initialState = {
    userData: {},
    score: 0,
    totalStep: 3,
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

  const deleteUserData = () => {
    dispatch({
      type: DELETE_USER_DATA,
    });
  };

  return (
    <FormContext.Provider
      value={{
        userData: state.userData,
        score: state.score,
        totalStep: state.totalStep,
        setUserData,
        addScore,
        deleteUserData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
