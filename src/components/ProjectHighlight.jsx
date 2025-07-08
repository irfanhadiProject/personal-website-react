import styles from './ProjectHighlight.module.css';

function ProjectHighlight() {
  return (
    <article className={styles.project}>
      <div>
        <h2>Project Highlight</h2>
        <ul>
          <li>
            <img src="/src/assets/images/movie-ranking.png" />
            <p>
              My personal list of favorite films, ranked from best to just
              awesome
            </p>
          </li>

          <li>
            <img src="/src/assets/images/html-only-resume.png" />
            <p>
              Welcome to my personal resume website, built entirely with plain
              HTML.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProjectHighlight;
