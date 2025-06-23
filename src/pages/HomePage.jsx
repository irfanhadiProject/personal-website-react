import About from '../components/About';
import Intro from '../components/Intro';
import Portofolio from '../components/Portofolio';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

function HomePage() {
  return (
    <>
      <main>
        <Intro />
        <Resume />
        <Portofolio />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
