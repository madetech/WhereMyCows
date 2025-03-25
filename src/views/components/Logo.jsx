import React from 'react';
import './Logo.css';

export function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <div className="logo-spot"></div>
        <div className="logo-spot"></div>
        <div className="logo-spot"></div>
        <div className="logo-ear left"></div>
        <div className="logo-ear right"></div>
        <div className="logo-face">
          <div className="logo-eye left"></div>
          <div className="logo-eye right"></div>
          <div className="logo-nose"></div>
          <div className="logo-mouth"></div>
        </div>
      </div>
      <div className="logo-text">
        <h1 className="logo-title">
          Where My Cows<span>.Be</span>
        </h1>
        <p className="logo-subtitle">Track your cattle with ease</p>
      </div>
    </div>
  );
} 