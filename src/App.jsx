import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './components/AppLayout';
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
import About from './pages/About';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="portofolio/:id" element={<ProjectDetailPage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
