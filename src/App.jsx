import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Banner from './Screen/Banner copy';
import Home from './Screen/Home';
import Newsletter from './Screen/Newsletter';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" component={Home} />
        <Route path="/about" component={Newsletter} />
        <Route path="/contact" component={Banner} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
