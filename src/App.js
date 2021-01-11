import React from 'react';
import Home from "./pages/home/Home.jsx";
import {
  Switch,
  Route
} from 'react-router-dom';

export default function App() {

  return (
    <main className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}


