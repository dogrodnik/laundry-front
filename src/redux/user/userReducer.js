import * as types from "./userTypes";

const initialState = {
  user: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, user: payload.user, loading: false };
    case types.LOGIN_FAILURE:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default userReducer;
