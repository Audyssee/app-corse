import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<Booking />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
