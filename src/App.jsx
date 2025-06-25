import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BirthdayInvitation from './pages/BirthdayInvitation';
import MovieRanking from './pages/MovieRanking';
import HtmlOnlyResume from './pages/HtmlOnlyResume';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="birthday-invitation" element={<BirthdayInvitation />} />
          <Route path="movie-ranking" element={<MovieRanking />} />
          <Route path="html-only-resume" element={<HtmlOnlyResume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
