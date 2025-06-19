function AboutItem({ image, alt, title, description }) {
  return (
    <li className="about-item">
      <img src={image} alt={alt} />
      <div className="about-item-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default AboutItem;
