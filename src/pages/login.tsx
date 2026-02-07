import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Container, Row, Col, Form, Button, Card, Alert, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaUser, FaVenusMars } from 'react-icons/fa';

interface User {
  name: string;
  email: string;
  password: string;
  gender: string;
}

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male'
  });

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: User) => u.email === loginData.email);

    if (!user) {
      setError('User not found. Please check your email or sign up.');
      return;
    }

    if (user.password !== loginData.password) {
      setError('Invalid password. Please try again.');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify({
      name: user.name,
      email: user.email,
      gender: user.gender
    }));

    router.push('/dashboard');
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    if (existingUsers.some((user: User) => user.email === signupData.email)) {
      setError('Email already registered. Please use a different email or login.');
      return;
    }

    const newUser = {
      name: signupData.name,
      email: signupData.email,
      password: signupData.password,
      gender: signupData.gender
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setSuccessMessage('Registration successful! Please login with your credentials.');
    setSignupData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: 'male'
    });
    setValidated(false);
    setActiveTab('login');
  };

  return (
    <Layout title={activeTab === 'login' ? 'Login - FitMonk' : 'Sign Up - FitMonk'}>
      <div
        className="py-5 min-vh-100 d-flex align-items-center"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <div
          className="position-absolute animate-float"
          style={{
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.1) 100%)',
            borderRadius: '50%',
            top: '-100px',
            right: '-50px'
          }}
        />
        <div
          className="position-absolute animate-float"
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)',
            borderRadius: '50%',
            bottom: '-50px',
            left: '-50px',
            animationDelay: '1s'
          }}
        />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">
                  {activeTab === 'login' ? 'Welcome Back!' : 'Create Account'}
                </h2>
                <p className="text-muted">
                  {activeTab === 'login'
                    ? 'Sign in to continue your fitness journey'
                    : 'Start your fitness journey with FitMonk'}
                </p>
              </div>

              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Card.Body className="p-4 p-md-5">
                  <div className="d-flex mb-4 p-1 rounded-3" style={{ background: '#f1f5f9' }}>
                    <button
                      className={`flex-grow-1 py-2 border-0 rounded-3 fw-medium transition ${activeTab === 'login' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                      onClick={() => {
                        setActiveTab('login');
                        setError(null);
                        setValidated(false);
                      }}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Login
                    </button>
                    <button
                      className={`flex-grow-1 py-2 border-0 rounded-3 fw-medium transition ${activeTab === 'signup' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                      onClick={() => {
                        setActiveTab('signup');
                        setError(null);
                        setSuccessMessage(null);
                        setValidated(false);
                      }}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Sign Up
                    </button>
                  </div>

                  {error && (
                    <Alert variant="danger" className="mb-4 rounded-3">
                      {error}
                    </Alert>
                  )}

                  {successMessage && (
                    <Alert variant="success" className="mb-4 rounded-3">
                      {successMessage}
                    </Alert>
                  )}

                  {activeTab === 'login' ? (
                    <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium small text-muted">EMAIL</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                            placeholder="Enter your email"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaEnvelope
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-medium small text-muted">PASSWORD</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                            minLength={6}
                            placeholder="Enter your password"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaLock
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          id="remember-login"
                        />
                        <Link href="#" passHref legacyBehavior>
                          <a className="text-primary small fw-medium">Forgot password?</a>
                        </Link>
                      </div>

                      <Button type="submit" variant="primary" className="w-100 py-3 mb-4 fw-semibold">
                        Sign In
                      </Button>

                      <div className="text-center mb-4">
                        <span className="text-muted small">or continue with</span>
                      </div>

                      <Row className="g-3">
                        <Col>
                          <Button
                            variant="outline-secondary"
                            className="w-100 py-2"
                            style={{ borderRadius: '12px' }}
                          >
                            <FaGoogle className="me-2" style={{ color: '#EA4335' }} /> Google
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-secondary"
                            className="w-100 py-2"
                            style={{ borderRadius: '12px' }}
                          >
                            <FaFacebook className="me-2" style={{ color: '#1877F2' }} /> Facebook
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  ) : (
                    <Form noValidate validated={validated} onSubmit={handleSignupSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium small text-muted">FULL NAME</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="text"
                            name="name"
                            value={signupData.name}
                            onChange={handleSignupChange}
                            required
                            placeholder="Enter your name"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaUser
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium small text-muted">EMAIL</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="email"
                            name="email"
                            value={signupData.email}
                            onChange={handleSignupChange}
                            required
                            placeholder="Enter your email"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaEnvelope
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium small text-muted">GENDER</Form.Label>
                        <Form.Select
                          name="gender"
                          value={signupData.gender}
                          onChange={handleSignupChange}
                          required
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="fw-medium small text-muted">PASSWORD</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="password"
                            name="password"
                            value={signupData.password}
                            onChange={handleSignupChange}
                            required
                            minLength={6}
                            placeholder="Create a password"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaLock
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-medium small text-muted">CONFIRM PASSWORD</Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={signupData.confirmPassword}
                            onChange={handleSignupChange}
                            required
                            minLength={6}
                            placeholder="Confirm your password"
                            style={{ paddingLeft: '45px' }}
                          />
                          <FaLock
                            className="position-absolute text-muted"
                            style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                          />
                        </div>
                      </Form.Group>

                      <Form.Check
                        type="checkbox"
                        label={<span className="small">I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a></span>}
                        id="terms-checkbox"
                        className="mb-4"
                        required
                      />

                      <Button type="submit" variant="primary" className="w-100 py-3 mb-4 fw-semibold">
                        Create Account
                      </Button>

                      <div className="text-center mb-4">
                        <span className="text-muted small">or sign up with</span>
                      </div>

                      <Row className="g-3">
                        <Col>
                          <Button
                            variant="outline-secondary"
                            className="w-100 py-2"
                            style={{ borderRadius: '12px' }}
                          >
                            <FaGoogle className="me-2" style={{ color: '#EA4335' }} /> Google
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="outline-secondary"
                            className="w-100 py-2"
                            style={{ borderRadius: '12px' }}
                          >
                            <FaFacebook className="me-2" style={{ color: '#1877F2' }} /> Facebook
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default AuthPage;