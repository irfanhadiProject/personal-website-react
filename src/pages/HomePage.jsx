import About from '../components/About';
import Intro from '../components/Intro';
import Portofolio from '../components/Portofolio';
import Resume from '../components/Resume';

function HomePage() {
  return (
    <>
      <Intro />
      <Resume />
      <Portofolio />
      <About />
    </>
  );
}

export default HomePage;
