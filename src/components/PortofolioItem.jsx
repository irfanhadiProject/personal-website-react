import { Link } from 'react-router-dom';

function PortofolioItem({ link, image, alt, title, description }) {
  return (
    <li className="portofolio-item">
      <Link to={link} className="portofolio-item-link">
        <img src={image} alt={alt} className="portofolio-item-image" />
        <div className="portofolio-item-content">
          <h3 className="portofolio-item-title">{title}</h3>
          <p className="portofolio-item-description">{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default PortofolioItem;
