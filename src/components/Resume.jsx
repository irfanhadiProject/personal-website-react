import ResumeEntry from './ResumeEntry';
import ResumeItem from './ResumeItem';

function Resume() {
  return (
    <article id="resume-section" className="resume">
      <div className="container-resume">
        <h2 className="title">resume</h2>
        <ul className="resume-content">
          <ResumeItem title="education">
            <ResumeEntry text="Bachelor of Physics - ITS (2019–2024)" />
            <ResumeEntry text="Science - MAN 2 Pontianak (2016–2019)" />
          </ResumeItem>

          <ResumeItem title="skills">
            <ResumeEntry text="Matlab - Beginner" />
            <ResumeEntry text="Microsoft Office - Intermediate" />
            <ResumeEntry text="Origin Lab - Beginner" />
            <ResumeEntry text="Web Development - Beginner" />
            <ResumeEntry text="Web Design - Beginner" />
            <ResumeEntry text="Web Programming - Beginner" />
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
