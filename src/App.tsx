import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Warning from './pages/warning';
import Welcome from './pages/welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/warning' Component={Warning}/>
        <Route path='/welcome' Component={Welcome}/>
      </Routes>
    </div>

  );
}

export default App;
