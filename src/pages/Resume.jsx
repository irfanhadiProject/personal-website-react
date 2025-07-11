import ResumeEntry from '../components/ResumeEntry';
import ResumeItem from '../components/ResumeItem';
import styles from './Resume.module.css';
import Container from '../components/Container';

function Resume() {
  return (
    <article className={styles.resume}>
      <Container title="Resume">
        <ResumeItem title="education">
          <ResumeEntry text="Bachelor of Physics - ITS" tag="2019–2024" />
          <ResumeEntry text="Science - MAN 2 Pontianak" tag="2016–2019" />
        </ResumeItem>

        <ResumeItem title="skills">
          <ResumeEntry text="Matlab" tag="Basic" />
          <ResumeEntry text="Microsoft Office" tag="Proficient" />
          <ResumeEntry text="Origin Lab" tag="Basic" />
          <ResumeEntry text="Web Development" tag="Proficient" />
          <ResumeEntry text="Web Design" tag="Basic" />
          <ResumeEntry text="Web Programming" tag="Basic" />
        </ResumeItem>

        <ResumeItem title="course">
          <ResumeEntry
            text="Udemy - The complete 2023 web development bootcamp"
            tag="2023-2024"
          />
          <ResumeEntry
            text="Udemy - The ultimate react course 2024: React, Redux, & more"
            tag="2024-2025"
          />
        </ResumeItem>

        <ResumeItem title="work experience">
          <ResumeEntry text="Electrospinning Lab Assistant" tag="2022–2023" />
          <ResumeEntry text="Private Quran Teacher" tag="2022–2023" />
          <ResumeEntry
            text="Math/Physics Tutor for High School"
            tag="2025–Present"
          />
          <ResumeEntry text="Math Tutor for Elementary" tag="2025–Present" />
        </ResumeItem>
      </Container>
    </article>
  );
}

export default Resume;
