import { Link } from 'react-router-dom';
import styles from './PortofolioItem.module.css';

function PortofolioItem({
  link,
  image,
  alt,
  title,
  year,
  category,
  description,
}) {
  return (
    <li className={styles.item}>
      <Link to={link}>
        <img src={image} alt={alt} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.meta}>
            <span className={styles.year}>{year}</span>
            <span className={styles.category}>{category}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default PortofolioItem;
