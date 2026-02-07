import { useState } from 'react';
import { Card, Badge, Button, Modal } from 'react-bootstrap';
import { NutritionTip } from '@/data/nutritionTips';
import { FaArrowRight, FaClock, FaBookOpen } from 'react-icons/fa';

interface NutritionCardProps {
  tip: NutritionTip;
}

const NutritionCard = ({ tip }: NutritionCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const getCategoryBadge = (category: string) => {
    const styles: { [key: string]: { bg: string; gradient: string } } = {
      'weight-loss': { bg: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' },
      'muscle-gain': { bg: '#667eea', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      'recovery': { bg: '#f093fb', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
      'general': { bg: '#56ab2f', gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' },
      'vegetarian': { bg: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)' }
    };

    const style = styles[category] || styles.general;
    const labels: { [key: string]: string } = {
      'weight-loss': 'Weight Loss',
      'muscle-gain': 'Muscle Gain',
      'recovery': 'Recovery',
      'general': 'General',
      'vegetarian': '🌱 Vegetarian'
    };

    return (
      <span
        className="px-3 py-1 rounded-pill text-white fw-semibold"
        style={{
          background: style.gradient,
          fontSize: '0.75rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
        }}
      >
        {labels[category] || 'General'}
      </span>
    );
  };

  return (
    <>
      <Card
        className="h-100 border-0 overflow-hidden"
        style={{
          borderRadius: '20px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        {/* Image Container */}
        <div className="position-relative" style={{ overflow: 'hidden' }}>
          <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 2 }}>
            {getCategoryBadge(tip.category)}
          </div>
          <img
            src={tip.image}
            alt={tip.title}
            className="w-100"
            style={{
              height: '220px',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Gradient Overlay */}
          <div
            className="position-absolute bottom-0 start-0 end-0"
            style={{
              height: '80px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)'
            }}
          />
        </div>

        {/* Card Body */}
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-2 text-muted small">
            <FaClock className="me-1" size={12} />
            <span>5 min read</span>
          </div>
          <Card.Title className="fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
            {tip.title}
          </Card.Title>
          <Card.Text className="text-muted mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            {tip.description}
          </Card.Text>
          <Button
            variant="link"
            onClick={handleShow}
            className="p-0 text-decoration-none fw-semibold d-flex align-items-center"
            style={{ color: '#56ab2f' }}
          >
            Read Article <FaArrowRight className="ms-2" size={14} />
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header
          closeButton
          className="border-0 pb-0"
          style={{ background: '#f8fafc' }}
        >
          <div>
            <div className="mb-2">{getCategoryBadge(tip.category)}</div>
            <Modal.Title className="fw-bold">{tip.title}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="pt-3">
          <img
            src={tip.image}
            alt={tip.title}
            className="img-fluid rounded-4 mb-4 w-100"
            style={{ maxHeight: '350px', objectFit: 'cover' }}
          />
          <div
            className="content-area"
            style={{
              whiteSpace: 'pre-line',
              lineHeight: '1.8',
              color: '#475569'
            }}
          >
            {tip.content}
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0" style={{ background: '#f8fafc' }}>
          <Button
            variant="primary"
            onClick={handleClose}
            className="px-4"
          >
            Close Article
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NutritionCard;