import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "..";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
