import React from "react";
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./Pages/Home";
const history = createBrowserHistory();

export default function App() {
  
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  )
}
render(<App/>, document.getElementById('root'));
