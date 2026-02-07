import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRunning, FaHeartbeat, FaAppleAlt, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaRunning size={32} color="white" />,
    title: 'Workout Tracking',
    description: 'Log all your workouts with details on exercises, sets, reps, and weights. Easily view your progress over time.',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
  },
  {
    icon: <FaHeartbeat size={32} color="white" />,
    title: 'Activity Monitoring',
    description: 'Track your daily steps, active minutes, and calories burned to maintain consistent activity levels.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: <FaAppleAlt size={32} color="white" />,
    title: 'Nutrition Guidance',
    description: 'Access nutritional tips and expert recommendations to complement your fitness routine.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: <FaChartLine size={32} color="white" />,
    title: 'Progress Analytics',
    description: 'Visualize your fitness journey with intuitive charts and detailed progress reports.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

const FeatureSection = () => {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <span className="badge-gradient mb-3 d-inline-block">FEATURES</span>
            <h2 className="section-title mb-3">Why Choose FitMonk?</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Comprehensive tools to help you achieve your fitness goals with a personalized experience
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <Card
                className="h-100 border-0 text-center p-4 feature-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  background: 'white'
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <div
                    className="icon-wrapper mb-4"
                    style={{
                      background: feature.gradient,
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Card.Title as="h5" className="mb-3 fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;