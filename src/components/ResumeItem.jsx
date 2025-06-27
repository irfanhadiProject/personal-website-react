import styles from './ResumeItem.module.css';

function ResumeItem({ title, children }) {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.content}>{children}</ul>
    </li>
  );
}

export default ResumeItem;
