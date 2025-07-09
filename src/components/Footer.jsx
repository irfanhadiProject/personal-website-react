import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="https://www.linkedin.com/in/irfan-hadi-364471223/">
              <img src="/linkedin-icon.svg" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/irfan._.hadi/">
              <img src="/instagram-icon.svg" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/irfanhadiProject">
              <img src="/github-icon.svg" />
            </Link>
          </li>
          <li>
            <Link to="https://irfanhadiproject.github.io/personal-website/">
              <img src="/web-icon.svg" />
            </Link>
          </li>
        </ul>
        <p className={styles.copyright}>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
