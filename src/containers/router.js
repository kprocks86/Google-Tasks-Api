import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import List from "../containers/List";

export default () => {
  return (
    <Switch>
      <Route path="/list" component={List} />
    </Switch>
  );
};
