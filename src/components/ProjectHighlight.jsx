import styles from './ProjectHighlight.module.css';
import booksReviewImage from '../assets/images/books-review-app.png';
import movieRankingImage from '../assets/images/movie-ranking.png';
import htmlResumeImage from '../assets/images/html-only-resume.png';

function ProjectHighlight() {
  return (
    <article className={styles.project}>
      <div>
        <h2>Project Highlight</h2>
        <ul>
          <li>
            <img src={booksReviewImage} />
            <div>
              <h3>Books review app</h3>
              <div>
                <span>2024</span>
                <span>Full Stack</span>
              </div>
              <p>
                A full-stack web application for reviewing books, built using
                Node.js, Express, PostgreSQL, and EJS. The app features a
                responsive UI, dynamic data rendering, and full CRUD
                functionality.The project is version-controlled with Git and
                hosted on GitHub.
              </p>
            </div>
          </li>

          <li>
            <img src={movieRankingImage} />
            <div>
              <h3>HTML Project</h3>
              <div>
                <span>2023</span>
                <span>HTML</span>
              </div>

              <p>
                This project is a personal list of my favorite films, ranked
                from the most memorable to those that are still absolutely
                awesome. The primary goal was to practice building a clean,
                well-structured HTML page using only semantic HTML elements.
              </p>
            </div>
          </li>

          <li>
            <img src={htmlResumeImage} />
            <div>
              <h3>Resume website</h3>
              <div>
                <span>2023</span>
                <span>HTML Layout</span>
              </div>

              <p>
                This project is a personal online resume, built entirely using
                plain HTML with no additional frameworks, styling, or scripting.
                The purpose of this website is to present essential information
                about myself including education, experience, skills, and
                contact details in a simple format.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProjectHighlight;
