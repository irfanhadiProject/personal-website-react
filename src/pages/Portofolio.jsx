import PortofolioItem from '../components/PortofolioItem';
import styles from './Portofolio.module.css';
import Container from '../components/Container';

function Portofolio() {
  return (
    <article className={styles.portofolio}>
      <Container title="My project">
        <PortofolioItem
          link="/portofolio/movie-ranking"
          image="/src/assets/images/movie-ranking.png"
          alt="movie ranking"
          title="favorite film ranking"
          year="2023"
          description="This project is a personal list of my favorite films, ranked from the most memorable to those that are still absolutely awesome. The primary goal was to practice building a clean, well-structured HTML page using only semantic HTML elements."
        />

        <PortofolioItem
          link="/portofolio/html-resume"
          image="/src/assets/images/html-only-resume.png"
          alt="html only resume"
          title="html only resume"
          year="2023"
          description="This project is a personal online resume, built entirely using plain HTML with no additional frameworks, styling, or scripting. The purpose of this website is to present essential information about myself including education, experience, skills, and contact details in a simple format"
        />

        <PortofolioItem
          link="/portofolio/birthday-invitation"
          image="/src/assets/images/birthday-invitation.png"
          alt="birthday invitation"
          title="birthday party invitation"
          year="2023"
          description="This project is a digital birthday invitation built entirely using plain HTML, with no additional styling frameworks or scripting. It serves to warmly invite guests by presenting key event details such as date, time, and location in a simple and accessible layout."
        />
      </Container>
    </article>
  );
}

export default Portofolio;
