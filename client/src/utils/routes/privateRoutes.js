import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "..";

const PrivateRoute = ({ component: Component, subRoutes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...props} subRoutes={subRoutes} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
