import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
      <Todos />
      </div>

      <Footer />

    </div>
  );
}

export default App;
