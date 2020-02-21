import * as types from "./boardTypes";

const initialState = {
  date: null,
  error: null,
  takenSlots: null,
  selectedSlot: null
};

const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_DATE:
      return {
        ...state,
        date: payload.date
      };
    case types.GET_SLOTS_FAILURE:
      return {
        ...state,
        error: payload.error,
        takenSlots: null
      };
    case types.GET_SLOTS_SUCCESS:
      return {
        ...state,
        error: null,
        takenSlots: payload.takenSlots
      };
    case types.SELECT_SLOT:
      return {
        ...state,
        selectedSlot: payload.slotNumber
      };
    case types.RESET_BOOKINGS:
      return {
        ...state,
        error: null,
        takenSlots: null,
        selectedSlot: null
      };
    default:
      return state;
  }
};

export default boardReducer;
