import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import settings from '../data/settings.json';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title (Only for Home and About)
    const baseTitle = settings.site_title || 'My Blog';
    
    if (location.pathname === '/') {
      document.title = baseTitle;
    } else if (location.pathname === '/about') {
      document.title = `About | ${baseTitle}`;
    }

    // 2. Send Page View to Google Analytics
    if (window.gtag) {
      setTimeout(() => {
         window.gtag('config', 'G-1506VLLZ2Q', {
          page_path: location.pathname + location.search,
          page_title: document.title
        });
      }, 100);
    }
  }, [location, settings.site_title]);

  return (
    <div className="app-wrapper">
      <header className="container mt-2 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontFamily: 'var(--font-sans)', 
          fontWeight: 700, 
          fontSize: '1.4rem', /* Increased from 1.2rem for better visibility */
          letterSpacing: '-0.02em' 
        }}>
          {settings.site_title}
        </Link>
        <nav>
          <Link to="/" className="font-sans text-sm" style={{ marginRight: '1.5rem', fontSize: '1rem' }}>Home</Link>
          <Link to="/about" className="font-sans text-sm" style={{ fontSize: '1rem' }}>About</Link>
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
