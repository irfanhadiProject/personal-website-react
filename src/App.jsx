import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayInvitation from './pages/BirthdayInvitation';
import MovieRanking from './pages/MovieRanking';
import HtmlOnlyResume from './pages/HtmlOnlyResume';
import AppLayout from './components/AppLayout';
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route
            path="portofolio/birthday-invitation"
            element={<BirthdayInvitation />}
          />
          <Route path="portofolio/movie-ranking" element={<MovieRanking />} />
          <Route path="portofolio/html-resume" element={<HtmlOnlyResume />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
