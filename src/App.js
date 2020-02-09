import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
