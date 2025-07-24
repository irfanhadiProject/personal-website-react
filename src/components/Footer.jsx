import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/irfan-hadi-364471223/">
              <img src="/linkedin-icon.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/irfan._.hadi/">
              <img src="/instagram-icon.svg" />
            </a>
          </li>
          <li>
            <a href="https://github.com/irfanhadiProject">
              <img src="/github-icon.svg" />
            </a>
          </li>
          <li>
            <a href="https://irfanhadiproject.github.io/personal-website/">
              <img src="/web-icon.svg" />
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
