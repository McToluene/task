import React, { Fragment, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";

import Header from "./Header";

const CustomerExperience = lazy(() => import("./CustomerExperience"));
const Sales = lazy(() => import("./Sales"));
const Home = lazy(() => import("./Home"));

const Index = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path={`${path}/`} exact component={Home} />
          <Route path={`${path}/customerexperience`} exact component={CustomerExperience} />
          <Route path={`${path}/sales`} exact component={Sales} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
