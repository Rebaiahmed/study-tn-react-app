import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Home from './components/Pages/Home';
import About from './components/Pages/About';


import {
  BrowserRouter as Router,
  Switch,
  Route
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
