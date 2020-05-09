import * as actions from "./adminActions";

import { fetchDate } from "../board/boardUtils";
import { bookSlot, deleteSlot, fetchDetails } from "../../services/Admin";
import { enableToast } from "../../redux/toast/toastActions";

export const bookSelectedSlot = (name, date, number, hours) => async (
  dispatch
) => {
  try {
    dispatch(actions.startBookSlot());
    const response = await bookSlot({ name, date, number, hours });
    dispatch(actions.bookSlotSuccess(response.data));
    dispatch(enableToast("BOOK"));
    dispatch(fetchDate(date, true));
  } catch (error) {
    if (error.response) {
      dispatch(actions.bookSlotFailure(error.response.data.msg));
      dispatch(enableToast("ERROR"));
    } else {
      dispatch(actions.bookSlotFailure("Internal server error"));
      dispatch(enableToast("ERROR"));
    }
  }
};

export const deleteSelectedSlot = (date, id) => async (dispatch) => {
  try {
    dispatch(actions.startDeleteSlot());
    await deleteSlot(id);
    dispatch(actions.deleteSlotSuccess());
    dispatch(enableToast("DELETE"));
    dispatch(fetchDate(date, true));
  } catch (error) {
    if (error.response) {
      dispatch(actions.deleteSlotFailure(error.response.statusText));
      dispatch(enableToast("ERROR"));
    } else {
      dispatch(actions.deleteSlotFailure("Internal server error"));
      dispatch(enableToast("ERROR"));
    }
  }
};

export const getDetails = (id) => async (dispatch) => {
  try {
    await dispatch(actions.startGetDetails());
    const response = await fetchDetails(id).catch(() => {
      throw new Error("Internal Server Error");
    });
    dispatch(actions.getDetailsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getDetailsFailure(error.message));
  }
};
