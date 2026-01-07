import styles from './Intro.module.css';
import myPicture from '../assets/images/my-picture.jpg';

function Intro() {
  return (
    <article id="intro-section" className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>I'm Irfan</h1>
          <p className={styles.description}>
            Web Developer focused on building responsive front-end interfaces and reliable backend services using React, Express.js, and PostgreSQL.
          </p>
          <a href="/CV_Irfan_Hadi.pdf" download="CV_Irfan_Hadi.pdf">
            <button>Download Resume</button>
          </a>
        </div>
        <div className={styles.picture}>
          <img className={styles.image} src={myPicture} alt="Irfan" />
        </div>
      </div>
    </article>
  );
}

export default Intro;
