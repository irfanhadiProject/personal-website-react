import AboutItem from './AboutItem';
import styles from './About.module.css';
import Container from './Container';

function About() {
  return (
    <article id="about-section" className={styles.about}>
      <Container title="About">
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
      </Container>
    </article>
  );
}

export default About;
