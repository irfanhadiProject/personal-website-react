import ResumeEntry from './ResumeEntry';
import ResumeItem from './ResumeItem';
import styles from './Resume.module.css';

function Resume() {
  return (
    <article id="resume-section" className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.title}>resume</h2>
        <ul className={styles.content}>
          <ResumeItem title="education">
            <ResumeEntry text="Bachelor of Physics - ITS (2019–2024)" />
            <ResumeEntry text="Science - MAN 2 Pontianak (2016–2019)" />
          </ResumeItem>

          <ResumeItem title="skills">
            <ResumeEntry text="Matlab - Basic" />
            <ResumeEntry text="Microsoft Office - Proficient" />
            <ResumeEntry text="Origin Lab - Basic" />
            <ResumeEntry text="Web Development - Proficient" />
            <ResumeEntry text="Web Design - Basic" />
            <ResumeEntry text="Web Programming - Basic" />
          </ResumeItem>

          <ResumeItem title="work experience">
            <ResumeEntry text="Electrospinning Lab Assistant (2022–2023)" />
            <ResumeEntry text="Private Quran Teacher (2022–2023)" />
            <ResumeEntry text="Math/Physics Tutor for High School (2025–Present)" />
            <ResumeEntry text="Math Tutor for Elementary (2025–Present)" />
          </ResumeItem>
        </ul>
      </div>
    </article>
  );
}

export default Resume;
