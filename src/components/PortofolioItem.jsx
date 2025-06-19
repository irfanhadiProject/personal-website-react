function PortofolioItem({ link, image, alt, title, description }) {
  return (
    <li
      className="portofolio-item"
      onClick={() => (window.location.href = link)}
    >
      <img src={image} alt={alt} />
      <div className="portofolio-item-content">
        <h3 className="portofolio-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default PortofolioItem;
