import Layout from '@/components/Layout';
import HomeHero from '@/components/HomeHero';
import FeatureSection from '@/components/FeatureSection';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight, FaQuoteLeft, FaMedal, FaChartLine, FaUsers, FaDumbbell, FaStar } from 'react-icons/fa';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <FeatureSection />

      {/* Exercise Menu Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="mb-3">
                <span className="badge-gradient">WORKOUT EXERCISES</span>
              </div>
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
                Discover Our Library of <span className="text-gradient">Exercises</span>
              </h2>
              <p className="mb-4 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Browse through our comprehensive collection of exercises targeting every muscle group.
                Each exercise comes with detailed instructions, form tips, and video demonstrations to ensure proper technique.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'].map((muscle, index) => (
                  <Button
                    key={muscle}
                    variant="outline-primary"
                    className="rounded-pill px-3 py-2"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {muscle}
                  </Button>
                ))}
              </div>
              <Link href="/workout-plans" passHref legacyBehavior>
                <Button variant="primary" size="lg" className="px-4">
                  View All Exercises <FaArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div className="position-relative">
                <div
                  className="position-absolute animate-float"
                  style={{
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.1) 100%)',
                    borderRadius: '50%',
                    top: '-30px',
                    left: '-30px',
                    zIndex: 1
                  }}
                />
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80"
                    alt="Exercise Menu"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      border: '6px solid white',
                      height: '450px',
                      objectFit: 'cover',
                      width: '100%'
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="fw-bold mb-3 text-white" style={{ fontSize: '2.5rem' }}>
                Trusted by Fitness Enthusiasts
              </h2>
              <p className="lead text-white" style={{ opacity: 0.9 }}>
                Join our growing community of health-conscious individuals who trust FitMonk for their fitness journey.
              </p>
            </Col>
          </Row>
          <Row className="text-center">
            {[
              { value: '10k+', label: 'Active Users', icon: <FaUsers /> },
              { value: '50+', label: 'Workout Plans', icon: <FaDumbbell /> },
              { value: '100+', label: 'Nutrition Tips', icon: <FaMedal /> },
              { value: '4.8', label: 'User Rating', icon: <FaStar /> }
            ].map((stat, index) => (
              <Col md={3} key={index} className="mb-4 mb-md-0">
                <div
                  className="p-4 rounded-4"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="display-4 fw-bold mb-2 text-white">{stat.value}</div>
                  <p className="mb-0 text-white" style={{ opacity: 0.9 }}>{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* App Screenshot Section */}
      <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="mb-3">
                <span className="badge-gradient">MOBILE APP</span>
              </div>
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
                Take Your Fitness Journey <span className="text-gradient">Anywhere</span>
              </h2>
              <p className="mb-4 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Our user-friendly mobile app lets you track workouts, monitor nutrition, and analyze fitness data on the go.
                Stay connected to your health goals wherever you are.
              </p>

              <div className="mb-4">
                {[
                  { icon: <FaChartLine />, title: 'Progress Tracking', desc: 'Visual representation of your fitness journey' },
                  { icon: <FaMedal />, title: 'Goal Setting', desc: 'Set and achieve your personal fitness goals' },
                  { icon: <FaUsers />, title: 'Community Support', desc: 'Connect with like-minded fitness enthusiasts' }
                ].map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div
                      className="p-3 rounded-3 me-3"
                      style={{
                        background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.1) 100%)'
                      }}
                    >
                      <span className="text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{item.title}</h6>
                      <small className="text-muted">{item.desc}</small>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/dashboard" passHref legacyBehavior>
                <Button variant="primary" size="lg" className="px-4">
                  Explore Dashboard <FaArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
            <Col lg={7}>
              <div className="position-relative">
                <div
                  className="position-absolute animate-float"
                  style={{
                    width: '250px',
                    height: '250px',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.05) 100%)',
                    borderRadius: '50%',
                    top: '-40px',
                    right: '-60px',
                    zIndex: 1
                  }}
                />
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80"
                    alt="FitMonk Mobile App"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ border: '6px solid white' }}
                  />
                  <div
                    className="position-absolute glass-card"
                    style={{
                      bottom: '-20px',
                      right: '40px',
                      zIndex: 3,
                      background: 'white',
                      padding: '16px 20px',
                      borderRadius: '16px',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                      maxWidth: '220px'
                    }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className="p-2 rounded-3 me-2"
                        style={{ background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' }}
                      >
                        <FaChartLine className="text-white" size={14} />
                      </div>
                      <span className="fw-bold small">Daily Reminder</span>
                    </div>
                    <div className="text-muted small">Time for your evening workout! 💪 You're 80% to your daily goal.</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="badge-gradient mb-3 d-inline-block">TESTIMONIALS</span>
              <h2 className="section-title">What Our Users Say</h2>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                quote: "I've tried many fitness apps, but FitMonk stands out with its intuitive interface and comprehensive tracking features. It's helped me stay consistent with my workouts for over 6 months now!",
                name: 'Sarah M.',
                role: 'Fitness Enthusiast',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80'
              },
              {
                quote: "The progress tracking graphs have been instrumental in my marathon preparation. Being able to visualize my improvements keeps me motivated and helps me adjust my training as needed.",
                name: 'David K.',
                role: 'Marathon Runner',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
              },
              {
                quote: "As a fitness coach, I recommend FitMonk to all my clients. The workout plans are well-structured, and the nutrition tips provide valuable guidance to complement their training regimen.",
                name: 'Jennifer R.',
                role: 'Fitness Coach',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
              }
            ].map((testimonial, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 border-0 testimonial-card">
                  <Card.Body className="p-4">
                    <div
                      className="mb-3 d-inline-flex p-2 rounded-3"
                      style={{ background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.1) 0%, rgba(168, 224, 99, 0.1) 100%)' }}
                    >
                      <FaQuoteLeft className="text-primary" size={20} />
                    </div>
                    <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                      "{testimonial.quote}"
                    </p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="me-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle"
                          width="50"
                          height="50"
                          style={{ objectFit: 'cover', border: '3px solid #f1f5f9' }}
                        />
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="position-absolute animate-pulse"
          style={{
            width: '400px',
            height: '400px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            top: '-200px',
            left: '-100px'
          }}
        />
        <div
          className="position-absolute animate-pulse"
          style={{
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            bottom: '-150px',
            right: '-50px',
            animationDelay: '1s'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="justify-content-center">
            <Col md={8}>
              <Logo size="medium" withText={false} className="mb-4 mx-auto" />
              <h2 className="mb-4 fw-bold" style={{ fontSize: '2.5rem' }}>
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="lead mb-4" style={{ opacity: 0.95 }}>
                Join thousands of users who are transforming their health with FitMonk
              </p>
              <Link href="/login" passHref legacyBehavior>
                <Button size="lg" variant="light" className="text-primary px-5 py-3 fw-bold">
                  Get Started Now <FaArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}