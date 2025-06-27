import styles from './About.module.css';

function AboutItem({ image, alt, title, description }) {
  return (
    <li className={styles.item}>
      <img src={image} alt={alt} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default AboutItem;
