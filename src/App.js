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
          <button className="close-menu" onClick={toggleMenu}>
            <img src={closeIcon} alt="Close menu" />
          </button>
          <ul className="nav-links">
            <li className="nav-link" onClick={() => toggleDropdown('features')}>
              Features <span>{dropdownOpen.features ? '▲' : '▼'}</span>
              <ul className={`dropdown-list ${dropdownOpen.features ? 'open' : ''}`}>
                <li><a href="#todo" aria-label="todo-list">Todo List</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#reminders">Reminders</a></li>
                <li><a href="#planning">Planning</a></li>
              </ul>
            </li>
            <li className="nav-link" onClick={() => toggleDropdown('company')}>
              Company <span>{dropdownOpen.company ? '▲' : '▼'}</span>
              <ul className={`dropdown-list ${dropdownOpen.company ? 'open' : ''}`}>
                <li><a href="#history">History</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="registration">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
        <button className={menuOpen ? 'close-menu' : 'open-menu'} onClick={toggleMenu}>
          <img src={menuOpen ? closeIcon : menuIcon} alt={menuOpen ? 'Close menu' : 'Open menu'} />
        </button>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      </header>

      <main>
        <div className="hero">
          <img src={isMobile ? heroMobile : heroDesktop} alt="Hero image" className="hero-image" />
          <div className="text-content">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="learn-more">Learn more</button>
          </div>
        </div>
        <div className="clients">
          <img src={databiz} alt="Databiz" />
          <img src={audiophile} alt="Audiophile" />
          <img src={meet} alt="Meet" />
          <img src={maker} alt="Maker" />
        </div>
      </main>

      <footer className="attribution">
        <p>Challenge by <a href="https://crio.do" target="_blank">Crio.Do</a>.</p>
      </footer>
    </div>
  );
};

export default App;