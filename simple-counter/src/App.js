import React from 'react';
import logo from './logo.svg';
import { FaRegClock } from "react-icons/fa";
import './App.css';
import MyTimer from './components/Simplecounter'
import MyTimerD from './components/SecondsD'
import MyTimerC from './components/SecondsC'
import MyTimerM from './components/SecondsM'
import MyTimerDM from './components/SecondsDM'
import MyTimerCM from './components/SecondsCM'


function App() {
  return (
    <div className="container">
    <div className="clock"><FaRegClock></FaRegClock></div>
      <div className="counters"><MyTimerCM></MyTimerCM></div>
      <div className="counters"><MyTimerDM></MyTimerDM></div>
      <div className="counters"><MyTimerM></MyTimerM></div>
      <div className="counters"><MyTimerC></MyTimerC></div>
      <div className="counters"><MyTimerD></MyTimerD></div>
      <div className="counters">
          <MyTimer></MyTimer>
          </div>
      
    </div>
  );
}

export default App;
