import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 mt-5" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="mb-4">
              <Logo size="medium" />
            </div>
            <p className="text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
              Your personal fitness companion to help you track workouts,
              monitor progress, and achieve your health goals. Join our community today.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon text-white">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="social-icon text-white">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="social-icon text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="social-icon text-white">
                <FaYoutube size={18} />
              </a>
            </div>
          </Col>
          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h6 className="text-white fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/" passHref legacyBehavior>
                  <a className="text-white-50 text-decoration-none hover-link">Home</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/dashboard" passHref legacyBehavior>
                  <a className="text-white-50 text-decoration-none hover-link">Dashboard</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/workout-plans" passHref legacyBehavior>
                  <a className="text-white-50 text-decoration-none hover-link">Workouts</a>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/nutrition" passHref legacyBehavior>
                  <a className="text-white-50 text-decoration-none hover-link">Nutrition</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h6 className="text-white fw-bold mb-4">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href="/contact" passHref legacyBehavior>
                  <a className="text-white-50 text-decoration-none hover-link">Contact Us</a>
                </Link>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white-50 text-decoration-none hover-link">Help Center</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white-50 text-decoration-none hover-link">Privacy Policy</a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white-50 text-decoration-none hover-link">Terms of Service</a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={4}>
            <h6 className="text-white fw-bold mb-4">Our Office</h6>
            <p className="text-white-50 mb-3" style={{ lineHeight: '1.8' }}>
              Shilp Epitome,<br />
              Sindhubhavan Road, Bodakdev<br />
              Ahmedabad, Gujarat 380059, India
            </p>
            <p className="text-white-50 mb-1">
              <strong className="text-white">Phone:</strong> +91 78748 38889
            </p>
            <p className="text-white-50 mb-4">
              <strong className="text-white">Email:</strong> support@fitmonk.com
            </p>

            <h6 className="text-white fw-bold mb-3">Special Offers</h6>
            <p className="text-white-50 mb-0" style={{ fontSize: '0.9rem' }}>
              For details on our latest special offers, please contact us today.
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Row className="pt-3">
          <Col md={6} className="text-center text-md-start">
            <p className="text-white-50 mb-0 small">
              © {year} FitMonk. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-white-50 mb-0 small">
              Made with <FaHeart className="text-danger mx-1" size={12} /> for fitness enthusiasts
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;