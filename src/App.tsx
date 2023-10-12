import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CategoryPanel from './components/CategoryPanel/CategoryPanel';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar/>
      <CategoryPanel/>
      {/*
      <div className="main-content">
        <Product />
      </div>
      <Cart /> */}
    </div>
  );
};

export default App;
