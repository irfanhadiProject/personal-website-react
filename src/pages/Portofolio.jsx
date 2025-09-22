import PortofolioItem from '../components/PortofolioItem';
import styles from './Portofolio.module.css';
import Container from '../components/Container';
import booksReviewImage from '../assets/images/books-review-app.png';
import triviaQuiz from '../assets/images/trivia-quiz.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';

function Portofolio() {
  return (
    <article className={styles.portofolio}>
      <Container title="My project">
        <PortofolioItem
          id="books-review"
          image={booksReviewImage}
          alt="Books review app"
          title="Books review app"
          year="2024"
          category="Full Stack"
          description="A full-stack web application for reviewing books, built using Node.js, Express, PostgreSQL, and EJS. The app features a responsive UI, dynamic data rendering, and full CRUD functionality.The project is version-controlled with Git and hosted on GitHub."
        />

        <PortofolioItem
          id="trivia-quiz"
          image={triviaQuiz}
          alt="Trivia Quiz Project"
          title="Trivia Quiz"
          year="2025"
          category="React"
          description="A responsive trivia quiz game built with React and Redux, featuring category-based questions from an external API. The app includes score tracking, instant feedback, and a clean UI styled with Tailwind CSS."
        />

        <PortofolioItem
          id="weather-dashboard"
          image={weatherDashboard}
          alt="Weather dashboard"
          title="Weather Dashboard"
          year="2025"
          category="Front-End React"
          description="A responsive weather dashboard built with React, Redux Toolkit, and Tailwind CSS. The app integrates the OpenWeather API to display real-time weather data and 5-day forecasts, featuring city-based search and a clean, modern UI."
        />
      </Container>
    </article>
  );
}

export default Portofolio;
