function ResumeItem({ title, children }) {
  return (
    <li className="resume-item">
      <h3 className="resume-item-title">{title}</h3>
      <ul className="resume-item-content">{children}</ul>
    </li>
  );
}

export default ResumeItem;
