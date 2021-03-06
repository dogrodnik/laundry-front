import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { checkAvailability } from "services/Date";

export const useDateCheck = (taken, lastBooking, selected = false, id) => {
  const [unavailable, setUnavailability] = useState(taken);
  const [style, setStyle] = useState("");
  const date = useSelector((state) => state.board.date);

  useEffect(() => {
    async function check() {
      if (!taken) {
        let avaiability = await checkAvailability(date, lastBooking);
        setUnavailability(!avaiability);
      }
    }
    check();
  }, [date, lastBooking, taken]);

  useEffect(() => {
    unavailable
      ? setStyle("--taken")
      : selected
      ? setStyle("--available--selected")
      : id
      ? setStyle("--available user")
      : setStyle("--available");
  }, [id, selected, unavailable]);

  return [unavailable, style];
};
