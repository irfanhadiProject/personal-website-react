import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <button className={styles.menu} onClick={handleToggleMenu}>
          &#9776;
        </button>
        <ul
          ref={navMenuRef}
          className={`${styles.navigation} ${menuOpen ? `${styles.show}` : ''}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portofolio">Portofolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
