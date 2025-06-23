import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayInvitation from './pages/BirthdayInvitation';
import MovieRanking from './pages/MovieRanking';
import HtmlOnlyResume from './pages/HtmlOnlyResume';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/birthday-invitation" element={<BirthdayInvitation />} />
        <Route path="/movie-ranking" element={<MovieRanking />} />
        <Route path="/html-only-resume" element={<HtmlOnlyResume />} />
      </Routes>
    </Router>
  );
}

export default App;
