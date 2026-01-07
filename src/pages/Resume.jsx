import ResumeEntry from '../components/ResumeEntry';
import ResumeItem from '../components/ResumeItem';
import styles from './Resume.module.css';
import Container from '../components/Container';

function Resume() {
  return (
    <article className={styles.resume}>
      <Container title="Resume">
        <ResumeItem title="education">
          <ResumeEntry text="Bachelor of Physics — ITS" tag="2019–2024" />
          <ResumeEntry text="Science — MAN 2 Pontianak" tag="2016–2019" />
        </ResumeItem>

        <ResumeItem title="skills">
          <ResumeEntry text="Frontend: HTML, CSS, JavaScript, React" />
          <ResumeEntry text="Backend: Node.js, Express.js, REST APIs" />
          <ResumeEntry text="Database: PostgreSQL, SQL" />
          <ResumeEntry text="Tools: Git, Testing, Deployment" />
        </ResumeItem>

        <ResumeItem title="courses">
          <ResumeEntry 
            text="Backend Javascript Expert (Express.js, Tests, CI/CD)"
            tag="Dicoding"
          />
          <ResumeEntry
            text="Full-Stack Web Development (HTML, CSS, JS, Node.js)"
            tag="Udemy"
          />
          <ResumeEntry
            text="React & State Management (Hooks, Redux)"
            tag="Udemy"
          />
        </ResumeItem>

        <ResumeItem title="work experience">
          <ResumeEntry
            text="Math & Physics Tutor — Teaching problem-solving and structured thinking"
            tag="2025–Present"
          />
        </ResumeItem>
      </Container>
    </article>
  );
}

export default Resume;
