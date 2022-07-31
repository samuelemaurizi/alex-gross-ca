import { SET_USER_DATA, SET_SCORE, DELETE_USER_DATA } from '../types';

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...payload },
      };
    case SET_SCORE:
      return {
        ...state,
        score: (state.score += payload),
      };
    case DELETE_USER_DATA:
      return {
        ...state,
        userData: {},
        score: 0,
      };
    default:
      return state;
  }
};

export default userReducer;
