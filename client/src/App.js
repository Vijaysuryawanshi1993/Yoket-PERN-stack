import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { publicRoutesList, privateRoutesList } from "./utils/routes";
import PublicRoute from "./utils/routes/publicRoutes";
import PrivateRoute from "./utils/routes/privateRoutes";

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutesList.map((routes, index) => {
          return (
            <PublicRoute
              key={index}
              restricted={routes.restricted}
              component={routes.component}
              path={routes.path}
              exact
            />
          );
        })}

        {privateRoutesList.map((routes, index) => {
          return (
            <PrivateRoute
              key={index}
              restricted={routes.restricted}
              component={routes.component}
              path={routes.path}
              exact
              subRoutes={routes.userRoutes}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
