import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Logo from './Logo';
import { FaChartLine, FaRunning, FaHeart, FaPlay } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <div className="hero-section py-5">
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="mb-4 animate-fade-up">
              <Logo size="large" className="mb-3" />
            </div>
            <h1 className="display-4 fw-bold mb-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Track Your Fitness Journey with <span className="text-gradient">FitMonk</span>
            </h1>
            <p className="lead mb-4 text-muted animate-fade-up" style={{ animationDelay: '0.2s', fontSize: '1.15rem' }}>
              Monitor your workouts, track calories, count steps, and visualize your progress
              all in one place. Join thousands of users achieving their fitness goals with FitMonk.
            </p>

            <div className="mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3 p-3 rounded-3" style={{ background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.15) 100%)' }}>
                  <FaChartLine className="text-primary" size={22} />
                </div>
                <span className="fw-medium">Track your daily progress and set goals</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3 p-3 rounded-3" style={{ background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.15) 100%)' }}>
                  <FaRunning className="text-primary" size={22} />
                </div>
                <span className="fw-medium">Access professionally designed workout plans</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 p-3 rounded-3" style={{ background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.15) 100%)' }}>
                  <FaHeart className="text-primary" size={22} />
                </div>
                <span className="fw-medium">Get nutrition tips for better health</span>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/login" passHref legacyBehavior>
                <Button size="lg" variant="primary" className="px-4 py-3">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/workout-plans" passHref legacyBehavior>
                <Button size="lg" variant="outline-primary" className="px-4 py-3 d-flex align-items-center">
                  <FaPlay className="me-2" size={14} /> Watch Demo
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-image position-relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {/* Decorative floating elements */}
              <div 
                className="position-absolute animate-float" 
                style={{ 
                  width: '180px', 
                  height: '180px', 
                  background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.25) 0%, rgba(168, 224, 99, 0.15) 100%)', 
                  borderRadius: '50%', 
                  top: '-30px', 
                  left: '-30px', 
                  zIndex: 1 
                }}
              />
              <div 
                className="position-absolute animate-float" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%)', 
                  borderRadius: '50%', 
                  bottom: '60px', 
                  right: '0px', 
                  zIndex: 1,
                  animationDelay: '1s'
                }}
              />
              
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Person working out in the gym"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ 
                  objectFit: 'cover', 
                  height: '520px', 
                  width: '100%',
                  zIndex: 2,
                  border: '6px solid white'
                }}
              />
              
              {/* Stats Floating Card */}
              <div 
                className="position-absolute glass-card animate-pulse" 
                style={{ 
                  width: '320px', 
                  backgroundColor: 'white', 
                  borderRadius: '16px', 
                  bottom: '40px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  zIndex: 3, 
                  boxShadow: '0 15px 40px rgba(0,0,0,0.12)', 
                  padding: '16px 20px' 
                }}
              >
                <div className="d-flex justify-content-around h-100 align-items-center">
                  <div className="text-center">
                    <div className="fw-bold fs-4 text-gradient">8,470</div>
                    <small className="text-muted fw-medium">Steps</small>
                  </div>
                  <div className="text-center" style={{ borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', padding: '0 20px' }}>
                    <div className="fw-bold fs-4" style={{ color: '#ef4444' }}>427</div>
                    <small className="text-muted fw-medium">Calories</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold fs-4" style={{ color: '#10b981' }}>65</div>
                    <small className="text-muted fw-medium">Active Min</small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeHero;