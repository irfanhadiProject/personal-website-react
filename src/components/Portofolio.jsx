import PortofolioItem from './PortofolioItem';

function Portofolio() {
  return (
    <article id="portofolio-section" className="portofolio">
      <div className="container-portofolio">
        <h2 className="title">my project</h2>
        <ul className="portofolio-content">
          <PortofolioItem
            link="/birthday-invitation"
            image="/src/assets/images/birthday-invitation.png"
            alt="birthday invitation"
            title="birthday party invitation"
            description="Welcome to my Birthday Invitation! You're invited to join the celebration"
          />

          <PortofolioItem
            link="/movie-ranking"
            image="/src/assets/images/movie-ranking.png"
            alt="movie ranking"
            title="favorite film ranking"
            description="My personal list of favorite films, ranked from best to just awesome"
          />

          <PortofolioItem
            link="/html-only-resume"
            image="/src/assets/images/html-only-resume.png"
            alt="html only resume"
            title="html only resume"
            description="Welcome to my personal resume website, built entirely with plain HTML."
          />
        </ul>
      </div>
    </article>
  );
}

export default Portofolio;
