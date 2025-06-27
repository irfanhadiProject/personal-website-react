import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/irfan-hadi-364471223/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/irfan._.hadi/">Instagram</a>
          </li>
          <li>
            <a href="https://irfanhadiproject.github.io/personal-website/">
              Website
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>© Irfan Hadi</p>
      </div>
    </footer>
  );
}

export default Footer;
