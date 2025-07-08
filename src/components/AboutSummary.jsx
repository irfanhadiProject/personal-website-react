import styles from './AboutSummary.module.css';

function AboutSummary() {
  return (
    <article className={styles.profile}>
      <div>
        <h2>My Profile</h2>
        <p>
          Hi! I'm a Front-End Developer with a background in Physics. I enjoy
          building clean, user-friendly websites using HTML, CSS, JavaScript,
          and React. I'm a quick learner who loves exploring new tech and
          turning ideas into real, working products.
        </p>
      </div>
    </article>
  );
}

export default AboutSummary;
