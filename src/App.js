import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateTutorial from "./hooks/StateTutorial";
import ReducerTutorial from "./hooks/ReducerTutorial";
import Main from "./hooks/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/useState" component={StateTutorial} />
        <Route exact path="/reducer" component={ReducerTutorial} />
      </Switch>
    </Router>
  );
};



export default App;
