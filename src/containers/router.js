import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import List from "../containers/List";
import GoogleAuth from "../containers/Auth";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GoogleAuth} />
      <Route path="/list" component={List} />
    </Switch>
  );
};
