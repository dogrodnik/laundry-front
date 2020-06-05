import React from "react";
import { Switch } from "react-router-dom";

import { Route } from "../Route";

import { AdminBookings } from "../../pages/AdminBookings";
import { AdminSearch } from "../../pages/AdminSearch";
import { BookingBoard } from "../../pages/BookingBoard";
import { Home } from "../../pages/Home";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
import { User } from "../../pages/User";
import { UserBookings } from "../../pages/UserBookings";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" secured component={AdminBookings} />
      <Route path="/booking-board" component={BookingBoard} secured />
      <Route path="/home" component={Home} />
      <Route path="/search" component={AdminSearch} secured />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/user" component={User} secured />
      <Route path="/user-bookings" component={UserBookings} secured />
    </Switch>
  );
};
