import { useState } from 'react'
import React from 'react';
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Subscriptions from './routes/Subscriptions';
import Register from './routes/Register';
import Clients from './routes/Clients';
import Subscribe from './routes/Subscribe';
import NotFound from './routes/NotFound';

//<Route path="*" element={<NotFound />} />


function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Subscriptions />} />
      <Route path="/Subscriptions" element={<Subscriptions />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Clients" element={<Clients />} />
      <Route path="/Subscribe" element={<Subscribe />} />
    </Routes>
  );
}

export default App
