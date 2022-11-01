import React from 'react';
import logo from '../logo.svg';
import './SplashScreen.css';

export function SplashScreen(){
    return(
        <div className="SplashScreen">
        <header className="SplashScreen-header">
          <img src={logo} className="SplashScreen-logo" alt="logo" />
          <p>
            TotalQSR
          </p>
        </header>
      </div>
    )
}