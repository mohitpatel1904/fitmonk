import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Logo from './Logo';
import { FaUser } from 'react-icons/fa';

interface User {
  name: string;
  email: string;
}

const Navigation = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount and route changes
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(userStr));
    } else {
      setIsLoggedIn(false);
      setCurrentUser(null);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logout
  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem('currentUser');
      setIsLoggedIn(false);
      setCurrentUser(null);
      router.push('/');
    } else {
      router.push('/login');
    }
  };

  return (
    <Navbar
      expand="lg"
      className="py-3"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="p-0" style={{ cursor: 'pointer' }}>
            <Logo size="medium" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link
                className={`mx-1 ${router.pathname === '/' ? 'active' : ''}`}
                style={{ fontWeight: 500 }}
              >
                Home
              </Nav.Link>
            </Link>
            {isLoggedIn && (
              <Link href="/dashboard" passHref legacyBehavior>
                <Nav.Link
                  className={`mx-1 ${router.pathname === '/dashboard' ? 'active' : ''}`}
                  style={{ fontWeight: 500 }}
                >
                  Dashboard
                </Nav.Link>
              </Link>
            )}
            <Link href="/workout-plans" passHref legacyBehavior>
              <Nav.Link
                className={`mx-1 ${router.pathname === '/workout-plans' ? 'active' : ''}`}
                style={{ fontWeight: 500 }}
              >
                Workouts
              </Nav.Link>
            </Link>
            <Link href="/nutrition" passHref legacyBehavior>
              <Nav.Link
                className={`mx-1 ${router.pathname === '/nutrition' ? 'active' : ''}`}
                style={{ fontWeight: 500 }}
              >
                Nutrition
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link
                className={`mx-1 ${router.pathname === '/contact' ? 'active' : ''}`}
                style={{ fontWeight: 500 }}
              >
                Contact
              </Nav.Link>
            </Link>

            {isLoggedIn && currentUser && (
              <div
                className="d-flex align-items-center mx-2 px-3 py-2 rounded-3"
                style={{ background: 'rgba(86, 171, 47, 0.1)' }}
              >
                <FaUser className="text-primary me-2" size={14} />
                <span className="fw-medium text-primary" style={{ fontSize: '0.9rem' }}>
                  {currentUser.name}
                </span>
              </div>
            )}

            <Button
              onClick={handleAuth}
              variant={isLoggedIn ? "outline-primary" : "primary"}
              className="ms-2 px-4"
              style={{ borderRadius: '12px' }}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;