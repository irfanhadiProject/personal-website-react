import { useEffect, useRef } from 'react';
import Navbar from './Navbar';

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetTop) {
          headerRef.current.classList.add('sticky');
        } else {
          headerRef.current.classList.remove('sticky');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header ref={headerRef}>
      <Navbar />
    </header>
  );
}

export default Header;
