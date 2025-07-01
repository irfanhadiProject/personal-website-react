import styles from './Container.module.css';

function Container({ children, title }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.content}>{children}</ul>
    </div>
  );
}

export default Container;
