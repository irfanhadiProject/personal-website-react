import styles from './Intro.module.css';

function Intro() {
  return (
    <article id="intro-section" className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>I'm Irfan</h1>
          <p className={styles.description}>
            Physics graduate, passionate about Web Development. Skilled in HTML,
            CSS, JavaScript, and React.js. Quick learner, self-motivated, and
            excited to grow through real-world projects.
          </p>
          <a href="/CV_Irfan_Hadi.pdf" download="CV_Irfan_Hadi.pdf">
            <button>Download Resume</button>
          </a>
        </div>
        <div className={styles.picture}>
          <img
            className={styles.image}
            src="/src/assets/images/my-picture.jpg"
            alt="Irfan"
          />
        </div>
      </div>
    </article>
  );
}

export default Intro;
