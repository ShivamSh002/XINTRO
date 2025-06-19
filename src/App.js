import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/logo.svg';
import heroMobile from './assets/images/image-hero-mobile.png';
import heroDesktop from './assets/images/image-hero-desktop.png';
import databiz from './assets/images/client-databiz.svg'; 
import audiophile from './assets/images/client-audiophile.svg';
import meet from './assets/images/client-meet.svg';
import maker from './assets/images/client-maker.svg';
import menuIcon from './assets/images/icon-menu.svg';
import closeIcon from './assets/images/icon-close-menu.svg';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ features: false, company: false });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (!isMobile) setMenuOpen(false); // Close menu on desktop resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (type) => {
    setDropdownOpen(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="app-container">
      <header>
        <img src={logo} alt="snap's logo" className="logo" />
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
            <img src={closeIcon} alt="Close menu" />
          </button>
          <ul className="nav-link">
            <li className={`nav-link ${dropdownOpen.features ? 'active' : ''}`} onClick={() => toggleDropdown('features')}>
              Features <span>{dropdownOpen.features ? '▲' : '▼'}</span>
              <ul className="dropdown-list">
                <li className="dropdown-link"><a href="#todo" aria-label="todo-list">Todo List</a></li>
                <li className="dropdown-link"><a href="#calendar">Calendar</a></li>
                <li className="dropdown-link"><a href="#reminders">Reminders</a></li>
                <li className="dropdown-link"><a href="#planning">Planning</a></li>
              </ul>
            </li>
            <li className={`nav-link ${dropdownOpen.company ? 'active' : ''}`} onClick={() => toggleDropdown('company')}>
              Company <span>{dropdownOpen.company ? '▲' : '▼'}</span>
              <ul className="dropdown-list">
                <li className="dropdown-link"><a href="#history">History</a></li>
                <li className="dropdown-link"><a href="#our-team">Our Team</a></li>
                <li className="dropdown-link"><a href="#blog">Blog</a></li>
              </ul>
            </li>
            <li className="nav-link"><a href="#careers">Careers</a></li>
            <li className="nav-link"><a href="#about">About</a></li>
          </ul>
          <div className="registration">
            <button>Login</button>
          </div>
          <div className="registration">
            <button>Register</button>
          </div>
        </nav>
        <button className={menuOpen ? 'close-menu' : 'open-menu'} onClick={toggleMenu} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <img src={menuOpen ? closeIcon : menuIcon} alt={menuOpen ? 'Close menu' : 'Open menu'} />
        </button>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      </header>

      <main>
          <picture>
            <source media="(min-width: 1000px)" srcSet={heroDesktop} />
            <img src={heroMobile} alt="Hero image" />
          </picture>
          <div className="text-content">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="learn-more">Learn more</button>
          </div>
        
        <div className="clients">
          <img src='./assets/images/client-databiz.svg' alt="Databiz" />
          <img src='./assets/images/client-audiophile.svg' alt="Audiophile" />
          <img src='./assets/images/client-meet.svg' alt="Meet" />
          <img src='./assets/images/client-maker.svg' alt="Maker" />
        </div>
      </main>

      <footer className="attribution">
        <p>Challenge by <a href="https://crio.do" target="_blank">Crio.Do</a>.</p>
      </footer>
    </div>
  );
};

export default App;