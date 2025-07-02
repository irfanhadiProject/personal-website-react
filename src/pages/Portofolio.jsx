import PortofolioItem from '../components/PortofolioItem';
import styles from './Portofolio.module.css';
import Container from '../components/Container';

function Portofolio() {
  return (
    <article className={styles.portofolio}>
      <Container title="My project">
        <PortofolioItem
          link="/portofolio/birthday-invitation"
          image="/src/assets/images/birthday-invitation.png"
          alt="birthday invitation"
          title="birthday party invitation"
          description="Welcome to my Birthday Invitation! You're invited to join the celebration"
        />

        <PortofolioItem
          link="/portofolio/movie-ranking"
          image="/src/assets/images/movie-ranking.png"
          alt="movie ranking"
          title="favorite film ranking"
          description="My personal list of favorite films, ranked from best to just awesome"
        />

        <PortofolioItem
          link="/portofolio/html-resume"
          image="/src/assets/images/html-only-resume.png"
          alt="html only resume"
          title="html only resume"
          description="Welcome to my personal resume website, built entirely with plain HTML."
        />
      </Container>
    </article>
  );
}

export default Portofolio;
