import PortofolioItem from '../components/PortofolioItem';
import styles from './Portofolio.module.css';
import Container from '../components/Container';
import booksReviewImage from '../assets/images/books-review-app.png';
import movieRankingImage from '../assets/images/movie-ranking.png';
import htmlResumeImage from '../assets/images/html-only-resume.png';
import birthdayImage from '../assets/images/birthday-invitation.png';

function Portofolio() {
  return (
    <article className={styles.portofolio}>
      <Container title="My project">
        <PortofolioItem
          link="https://github.com/irfanhadiProject/books-review"
          image={booksReviewImage}
          alt="Books review app"
          title="Books review app"
          year="2024"
          category="Full Stack"
          description="A full-stack web application for reviewing books, built using Node.js, Express, PostgreSQL, and EJS. The app features a responsive UI, dynamic data rendering, and full CRUD functionality.The project is version-controlled with Git and hosted on GitHub."
        />

        <PortofolioItem
          link="/portofolio/movie-ranking"
          image={movieRankingImage}
          alt="movie ranking"
          title="favorite film ranking"
          year="2023"
          category="HTML"
          description="This project is a personal list of my favorite films, ranked from the most memorable to those that are still absolutely awesome. The primary goal was to practice building a clean, well-structured HTML page using only semantic HTML elements."
        />

        <PortofolioItem
          link="/portofolio/html-resume"
          image={htmlResumeImage}
          alt="html only resume"
          title="html only resume"
          year="2023"
          category="HTML Layouting"
          description="This project is a personal online resume, built entirely using plain HTML with no additional frameworks, styling, or scripting. The purpose of this website is to present essential information about myself including education, experience, skills, and contact details in a simple format"
        />

        <PortofolioItem
          link="/portofolio/birthday-invitation"
          image={birthdayImage}
          alt="birthday invitation"
          title="birthday party invitation"
          year="2023"
          category="HTML"
          description="This project is a digital birthday invitation built entirely using plain HTML, with no additional styling frameworks or scripting. It serves to warmly invite guests by presenting key event details such as date, time, and location in a simple and accessible layout."
        />
      </Container>
    </article>
  );
}

export default Portofolio;
