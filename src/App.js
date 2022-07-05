import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Favorite from './components/favorite/Favorite';

function App({notifier}) {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favorites" element={<Favorite notifier={notifier} />} />
      </Routes>
    </>
  );
}

export default App;
