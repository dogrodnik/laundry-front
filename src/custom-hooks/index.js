import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { checkAvailability } from "../services/Date";

export const useDateCheck = (taken, lastBooking, selected = false) => {
  const [unavailable, setUnavailability] = useState(taken);
  const [style, setStyle] = useState("");
  const date = useSelector(state => state.board.date);

  useEffect(() => {
    async function check() {
      let avaiability = await checkAvailability(date, lastBooking);
      if (!avaiability) setUnavailability(true);
    }
    check();
  });

  useEffect(() => {
    unavailable
      ? setStyle("--taken")
      : selected
      ? setStyle("--available--selected")
      : setStyle("--available");
  }, [selected, unavailable]);

  return [unavailable, style];
};