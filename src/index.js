import React from "react";
import {render} from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  )
}
render(<App/>, document.getElementById('root'));
