import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "redux/admin/adminUtils";

export const AdminUser = () => {
  const { name, email, date } = useSelector(({ admin }) => admin.user);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="admin-user">
      <h2>User Details</h2>
      <div className="admin-user__details">
        <p>
          <span>Nickname:</span> {name}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Joining date:</span> {date ? date.slice(0, 10) : null}
        </p>
      </div>
    </div>
  );
};
