import * as types from "./userBookingsTypes";

export const fetchUserBookings = () => {
  return {
    type: types.FETCH_BOOKINGS
  };
};

export const fetchUserBookingsSuccess = userBookings => {
  return {
    type: types.FETCH_BOOKINGS_SUCCESS,
    payload: { userBookings }
  };
};

export const fetchUserBookingsFailure = error => {
  return {
    type: types.FETCH_BOOKINGS_FAILURE,
    payload: { error }
  };
};