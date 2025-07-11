import React, { useState, useEffect } from 'react';
import { FaBars, FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Tailwind.css';

function NavBar() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) ?? 
           window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* الجزء الأيسر (الشعار) */}
      <div className="navbar-left flex items-center gap-4">
        <Link to="/about" onClick={closeMenu} className="logo-link">
          <img src='/images/53.jpeg' alt="logo" className='logo' />
          <h1 className="site-title">zvshh</h1>
        </Link>
      </div>

      {/* زر القائمة (للجوال) */}
      <button 
        className="mobile-menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* الجزء الأيمن (الروابط + زر الثيم) */}
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Me</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;