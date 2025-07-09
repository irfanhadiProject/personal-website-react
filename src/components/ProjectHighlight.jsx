import styles from './ProjectHighlight.module.css';

function ProjectHighlight() {
  return (
    <article className={styles.project}>
      <div>
        <h2>Project Highlight</h2>
        <ul>
          <li>
            <img src="/src/assets/images/movie-ranking.png" />
            <div>
              <h3>HTML Project</h3>
              <span>2023</span>
              <p>
                This project is a personal list of my favorite films, ranked
                from the most memorable to those that are still absolutely
                awesome. The primary goal was to practice building a clean,
                well-structured HTML page using only semantic HTML elements.
              </p>
            </div>
          </li>

          <li>
            <img src="/src/assets/images/html-only-resume.png" />
            <div>
              <h3>Resume website</h3>
              <span>2023</span>
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
