import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function getLinkClass(isActive) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
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
            <NavLink
              to="/"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portofolio"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              Portofolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => getLinkClass(isActive)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
