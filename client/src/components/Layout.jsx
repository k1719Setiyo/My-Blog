import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import settings from '../data/settings.json';

export default function Layout() {
  return (
    <div className="app-wrapper">
      <header className="container mt-2 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          {settings.site_title}
        </Link>
        <nav>
          <Link to="/" className="font-sans text-sm" style={{ marginRight: '1.5rem' }}>Home</Link>
          <Link to="/about" className="font-sans text-sm">About</Link>
        </nav>
      </header>

      <main className="container" style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>

      <footer className="container mt-4 mb-2 text-center text-muted text-sm font-sans">
        <p>{settings.footer_text}</p>
      </footer>
    </div>
  );
}
