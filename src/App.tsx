import React, { Fragment, FunctionComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import CssBaseline from "@material-ui/core/CssBaseline";

import PageLoader from "./atoms/PageLoader";

const Home = lazy(() => import("./pages/Home/Index"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Router>
        <Suspense fallback={<PageLoader color="#3F51B5" visible={true} size={32} />}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
        <BottomNav />
      </Router>
    </Fragment>
  );
};

export default App;
