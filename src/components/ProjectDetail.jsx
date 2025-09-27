import styles from './ProjectDetail.module.css';

export default function ProjectDetail({
  title,
  description,
  stack,
  year,
  links,
  images = {},
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {year && <span className={styles.year}>{year}</span>}
      </header>

      <p className={styles.description}>{description}</p>

      {stack?.length > 0 && (
        <ul className={styles.stack}>
          {stack.map((tech, idx) => (
            <li key={idx} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
      )}

      {images.thumbnail && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Thumbnail</h2>
          <div className={styles.imageWrapper}>
            <div className={styles.imageCard}>
              <img src={images.thumbnail} alt={`${title} thumbnail`} />
            </div>
          </div>
        </div>
      )}

      {images.screenshots?.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Screenshots</h2>
          <div className={styles.imageWrapper}>
            {images.screenshots.map((src, idx) => (
              <div key={idx} className={styles.imageCard}>
                <img src={src} alt={`${title} screenshot ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {images.codeSnapshots?.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Code Snapshots</h2>
          <div className={styles.imageWrapper}>
            {images.codeSnapshots.map((src, idx) => (
              <div key={idx} className={styles.imageCard}>
                <img src={src} alt={`${title} code snapshot ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {images.design?.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Design</h2>
          <div className={styles.imageWrapper}>
            {images.design.map((src, idx) => (
              <div key={idx} className={styles.imageCard}>
                <img src={src} alt={`${title} design mockup ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {links?.length > 0 && (
        <div className={styles.links}>
          {links.map(({ href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
