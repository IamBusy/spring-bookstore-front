import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SigninPage from "./routes/SigninPage.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/signin" component={SigninPage} />
    </Router>
  );
}

export default RouterConfig;
