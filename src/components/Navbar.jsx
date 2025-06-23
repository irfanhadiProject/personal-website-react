import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="logo">IRFAN HADI</a>
        <button className="menu-toggle" onClick={handleToggleMenu}>
          &#9776;
        </button>
        <ul ref={navMenuRef} className={`navigation ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a href="#resume-section">Resume</a>
          </li>
          <li className="nav-item">
            <a href="#portofolio-section">Portofolio</a>
          </li>
          <li className="nav-item">
            <a href="#about-section">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
