import AboutItem from './AboutItem';
import styles from './About.module.css';

function About() {
  return (
    <article id="about-section" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <ul className={styles.content}>
          <AboutItem
            image="/src/assets/images/dog-gaming.gif"
            alt="Gaming"
            title="Gaming"
            description="I like playing mobile and PC games in my free time. War Thunder is one of my favorites because it's fun, challenging, and full of action."
          />

          <AboutItem
            image="/src/assets/images/WFH-penguin.gif"
            alt="Programming"
            title="Programming"
            description="I'm learning to become a better programmer. Right now, I'm focused on web development and picking up Python to improve my coding skills. It's been a fun learning journey so far!"
          />

          <AboutItem
            image="/src/assets/images/duo.gif"
            alt="Duolingo"
            title="Duo's Friend"
            description="I've been using Duolingo for about a year to learn languages such as English, Japanese, and Arabic. It's been a helpful way to improve my language skills."
          />
        </ul>
      </div>
    </article>
  );
}

export default About;
