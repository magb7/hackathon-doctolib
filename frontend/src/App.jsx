import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientPage from "./components/PatientPage";
import PracticianPage from "./components/PracticianPage";
import Login from "./components/Login";
import "./App.css";
const routes = [
  {
    path: "/patient",
    component: PatientPage,
  },
  {
    path: "/login",
    component: PracticianPage,
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
const App = () => (
  <>
    <Router>
      <Route path="/" exact component={Login} />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  </>
);
export default App;
