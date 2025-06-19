function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="logo">IRFAN HADI</a>
        <button className="menu-toggle" id="menuToggle">
          &#9776;
        </button>
        <ul id="navMenu" className="navigation">
          <li className="nav-item">
            <a href="#intro-section">Home</a>
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
