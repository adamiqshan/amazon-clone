import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';

function App() {
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Router path="/">
            <Header />
            <h1>Home Page</h1>
          </Router>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
