import { useState } from 'react';
import styles from './ProjectDetail.module.css';
import Lightbox from './Lightbox';

export default function ProjectDetail({
  title,
  description,
  stack,
  year,
  links,
  images = {},
}) {
  const [lightbox, setLightBox] = useState({
    isOpen: false,
    src: '',
    index: 0,
    group: '',
  });

  const openLightbox = (src, index, group) =>
    setLightBox({ isOpen: true, src, index, group });
  const closeLightbox = () => setLightBox({ ...lightbox, isOpen: false });

  const renderImageGroup = (groupName, groupImages) => (
    <div className={styles.group}>
      <h2 className={styles.groupTitle}>{groupName}</h2>
      <div className={styles.imageGrid}>
        {groupImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="preview"
            className={styles.image}
            onClick={() => openLightbox(src, idx, groupName)}
          />
        ))}
      </div>
    </div>
  );
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {year && <span className={styles.year}>{year}</span>}
      </header>
      <p className={styles.description}>{description}</p>
      <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      {images.screenshots?.length > 0 &&
        renderImageGroup('Screenshots', images.screenshots)}
      {images.codeSnapshots?.length > 0 &&
        renderImageGroup('Code Snapshots', images.codeSnapshots)}
      {images.design?.length > 0 && renderImageGroup('Designs', images.design)}

      {links?.length > 0 && (
        <div className={styles.links}>
          {links.map(({ href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {lightbox.isOpen && (
        <Lightbox
          initialIndex={lightbox.index}
          images={images[lightbox.group.toLowerCase()]}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
