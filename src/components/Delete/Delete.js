import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteUser } from "../../redux/user/userUtils";

import { withConfirm } from "../withConfirm";

const Delete = ({ name, setOpen, confirm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirm) dispatch(deleteUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm]);

  return (
    <button className={name} onClick={() => setOpen(true)}>
      DELETE
    </button>
  );
};

const deleteWithConfirm = withConfirm(Delete);
export { deleteWithConfirm as Delete };
