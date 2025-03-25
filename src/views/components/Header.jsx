import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import './Header.css';

export function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cattle" className="nav-link">Cattle</Link>
          <Link to="/reports" className="nav-link">Reports</Link>
        </nav>
      </div>
      <div className="grass-patch left"></div>
      <div className="grass-patch right"></div>
    </header>
  );
} 