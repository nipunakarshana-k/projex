import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0,0); }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar-mm${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <img src="/images/logo-white.png" alt="Projex Logo" />
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`nav-link${location.pathname === l.to ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="nav-cta">
        <i className="bi bi-arrow-right-circle"></i> Get In Touch
      </Link>

      <button className="nav-mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
      </button>
    </nav>
  );
}
