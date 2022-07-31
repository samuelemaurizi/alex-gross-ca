import { SET_USER_DATA, SET_SCORE } from '../types';

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
    default:
      return state;
  }
};

export default userReducer;
