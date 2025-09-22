import styles from './ProjectDetail.module.css';

export default function ProjectDetail({
  title,
  description,
  images,
  links,
  stack,
  year,
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {year && <span className={styles.year}>{year}</span>}
      </header>

      <p className={styles.description}>{description}</p>

      {stack && (
        <ul className={styles.stack}>
          {stack.map((tech, idx) => (
            <li key={idx} className={styles.stackItem}>
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.imageWrapper}>
        {images.map((src, idx) => (
          <div key={idx} className={styles.imageCard}>
            <img src={src} alt={`${title} screenshot ${idx + 1}`} />
          </div>
        ))}
      </div>

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
    </div>
  );
}
