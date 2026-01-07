import styles from './AboutSummary.module.css';

function AboutSummary() {
  return (
    <article className={styles.profile}>
      <div>
        <h2>My Profile</h2>
        <p>
          I’m a Web Developer focused on Front-End development with hands-on experience in Backend systems. I’ve built web applications using React on the front end, Node.js & Express for backend services, and PostgreSQL for data management. I’m familiar with RESTful API design, basic authentication, testing, and deployment workflows.
        </p>
      </div>
    </article>
  );
}

export default AboutSummary;
