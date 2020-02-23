import * as types from "./bookingTypes";

const initialState = {
  loading: false,
  error: false,
  bookedSlot: null
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.START_BOOKING:
      return { ...state, loading: true };
    case types.BOOKING_SUCCESS:
      return { ...state, loading: false, bookedSlot: payload.bookedSlot };
    case types.BOOKING_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};

export default bookingReducer;