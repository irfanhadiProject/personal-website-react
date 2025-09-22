import styles from './ResumeItem.module.css';

function ResumeItem({ title, children }) {
  return (
    <section className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <ul>{children}</ul>
      </div>
    </section>
  );
}

export default ResumeItem;
