import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import * as axios from 'axios';
import Vehicles from './components/Vehicles';
import Footers from './components/Footer';

function App() {
  const getData = () => {
    
  }

  return (
    <>
      <Header />
      <div className="container">
        <Vehicles />
      </div>
      <Footers />
    </>
  );
}

export default App;
