import { useState } from 'react';
import Layout from '@/components/Layout';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaPaperPlane, FaUser, FaTag } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      console.log('Form data:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setValidated(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'support@fitmonk.com',
      color: '#56ab2f'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 78748 38889',
      color: '#667eea'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: 'Shilp Epitome, Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat 380059, India',
      color: '#f093fb'
    }
  ];

  return (
    <Layout title="Contact Us - FitMonk">
      {/* Hero Section */}
      <div
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="position-absolute animate-float"
          style={{
            width: '250px',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.1) 100%)',
            borderRadius: '50%',
            top: '-80px',
            right: '-50px'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <span className="badge-gradient mb-3 d-inline-block">
                GET IN TOUCH
              </span>
              <h1 className="display-5 fw-bold mb-3">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="lead text-muted">
                Have questions about FitMonk or need help with your fitness journey?
                We're here to assist you. Reach out to our team.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-5" style={{ background: '#f8fafc' }}>
        <Container>
          <Row className="g-4">
            {/* Contact Info Cards */}
            <Col lg={4}>
              <div className="d-flex flex-column gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0"
                    style={{ borderRadius: '20px' }}
                  >
                    <Card.Body className="p-4 d-flex align-items-start">
                      <div
                        className="p-3 rounded-3 me-3"
                        style={{
                          background: `${info.color}15`,
                          color: info.color
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{info.title}</h6>
                        <p className="mb-0 text-muted">{info.value}</p>
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                {/* Social Links */}
                <Card className="border-0" style={{ borderRadius: '20px' }}>
                  <Card.Body className="p-4">
                    <h6 className="fw-bold mb-3">Follow Us</h6>
                    <div className="d-flex gap-2">
                      {[
                        { icon: <FaFacebook />, color: '#1877F2' },
                        { icon: <FaTwitter />, color: '#1DA1F2' },
                        { icon: <FaInstagram />, color: '#E4405F' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href="#"
                          className="p-3 rounded-3 d-flex align-items-center justify-content-center"
                          style={{
                            background: `${social.color}15`,
                            color: social.color,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card className="border-0" style={{ borderRadius: '24px' }}>
                <Card.Body className="p-4 p-md-5">
                  <h4 className="fw-bold mb-4">Send us a Message</h4>

                  {submitted && (
                    <Alert
                      variant="success"
                      className="mb-4 rounded-3 border-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.1) 0%, rgba(168, 224, 99, 0.1) 100%)',
                        color: '#166534'
                      }}
                    >
                      ✓ Thank you for your message! We'll get back to you as soon as possible.
                    </Alert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="g-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium small text-muted">YOUR NAME</Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
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
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium small text-muted">EMAIL ADDRESS</Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
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
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-medium small text-muted">SUBJECT</Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              placeholder="What is this about?"
                              style={{ paddingLeft: '45px' }}
                            />
                            <FaTag
                              className="position-absolute text-muted"
                              style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-medium small text-muted">MESSAGE</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            placeholder="Write your message here..."
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="px-5 py-3"
                        >
                          <FaPaperPlane className="me-2" /> Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;