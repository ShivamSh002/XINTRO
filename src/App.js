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
      const nowMobile = window.innerWidth < 1000;
      setIsMobile(nowMobile);
      if (!nowMobile) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="app-container">
      <header>
        <img src={logo} alt="snap's logo" className="logo" />

        <nav
          className="nav"
          style={{ display: isMobile && !menuOpen ? 'none' : 'block' }}
        >
          <ul className="nav-links">
            <li
              className={`nav-link ${dropdownOpen.features ? 'link-open' : ''}`}
              onClick={() => toggleDropdown('features')}
            >
              Features <span>{dropdownOpen.features ? '▲' : '▼'}</span>
              <ul
                className="dropdown-list"
                style={{ display: dropdownOpen.features ? 'block' : 'none' }}
              >
                <li className="dropdown-link">
                  <a href="#todo" aria-label="todo-list">Todo List</a>
                </li>
                <li className="dropdown-link">
                  <a href="#calendar">Calendar</a>
                </li>
                <li className="dropdown-link">
                  <a href="#reminders">Reminders</a>
                </li>
                <li className="dropdown-link">
                  <a href="#planning">Planning</a>
                </li>
              </ul>
            </li>

            <li
              className={`nav-link ${dropdownOpen.company ? 'link-open' : ''}`}
              onClick={() => toggleDropdown('company')}
            >
              Company <span>{dropdownOpen.company ? '▲' : '▼'}</span>
              <ul
                className="dropdown-list"
                style={{ display: dropdownOpen.company ? 'block' : 'none' }}
              >
                <li className="dropdown-link">
                  <a href="#history">History</a>
                </li>
                <li className="dropdown-link">
                  <a href="#our-team">Our Team</a>
                </li>
                <li className="dropdown-link">
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#careers">Careers</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
          </ul>

          <div className="registration">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>

        {/* Open and Close Menu Buttons */}
        {!menuOpen && (
          <button className="open-menu" onClick={toggleMenu} aria-label="Open menu">
            <img src={menuIcon} alt="Open menu" />
          </button>
        )}

        {menuOpen && (
          <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
            <img src={closeIcon} alt="Close menu" />
          </button>
        )}

        <div
          className="overlay"
          style={{ display: menuOpen ? 'block' : 'none', opacity: menuOpen ? 1 : 0 }}
          onClick={toggleMenu}
        />
      </header>

      <main>
        <div className="hero">
          <picture>
            <source media="(min-width: 1000px)" srcSet="./assets/images/image-hero-desktop.png" />
            <img src="./assets/images/image-hero-mobile.png" alt="Hero image" />
          </picture>

          <div className="text-content">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.
            </p>
            <button className="learn-more">Learn more</button>
          </div>
        </div>

        <div className="clients">
          <img src="./assets/images/client-databiz.svg" alt="Databiz" />
          <img src="./assets/images/client-audiophile.svg" alt="Audiophile" />
          <img src="./assets/images/client-meet.svg" alt="Meet" />
          <img src="./assets/images/client-maker.svg" alt="Maker" />
        </div>
      </main>

      <footer className="attribution">
        <p>
          Challenge by <a href="https://crio.do" target="_blank" rel="noopener noreferrer">Crio.Do</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
