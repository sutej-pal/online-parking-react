import React from 'react';
import GoogleMaps from './components/google.maps';
import BasicExample from './components/basic.example';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
