import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SigninPage from "./routes/SigninPage.js";


import SignupPage from "./routes/SignupPage.js";


import ListPage from "./routes/ListPage.js";


import DetailPage from "./routes/DetailPage.js";


import CartPage from "./routes/CartPage.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/Signup" component={SignupPage} />
      <Route path="/categories/:categoryId" component={ListPage} />
      <Route path="/search/:searchKey" component={ListPage} />
      <Route path="/products/:productId" component={DetailPage} />
      <Route path="/cart" component={CartPage} />
    </Router>
  );
}

export default RouterConfig;
