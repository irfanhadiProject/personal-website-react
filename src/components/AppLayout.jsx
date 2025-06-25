import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
