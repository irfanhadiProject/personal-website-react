function ResumeEntry({ text, tag }) {
  return (
    <li>
      <p>{text}</p>
      {tag && <span>{tag}</span>}
    </li>
  );
}

export default ResumeEntry;
