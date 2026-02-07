import { Row, Col, Card } from 'react-bootstrap';
import { FaWalking, FaFireAlt, FaClock, FaWater } from 'react-icons/fa';
import { DailyStats } from '@/data/mockUserData';

interface StatsCardsProps {
  currentStats: DailyStats;
}

const StatsCards = ({ currentStats }: StatsCardsProps) => {
  return (
    <Row className="g-4 mb-4">
      <Col sm={6} xl={3}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Body className="d-flex align-items-center">
            <div className="rounded-circle p-3 bg-primary bg-opacity-10 me-3">
              <FaWalking className="text-primary" size={24} />
            </div>
            <div>
              <h6 className="text-muted mb-1">Steps</h6>
              <h3 className="mb-0">{currentStats.steps.toLocaleString()}</h3>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} xl={3}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Body className="d-flex align-items-center">
            <div className="rounded-circle p-3 bg-danger bg-opacity-10 me-3">
              <FaFireAlt className="text-danger" size={24} />
            </div>
            <div>
              <h6 className="text-muted mb-1">Calories Burned</h6>
              <h3 className="mb-0">{currentStats.caloriesBurned.toLocaleString()}</h3>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} xl={3}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Body className="d-flex align-items-center">
            <div className="rounded-circle p-3 bg-success bg-opacity-10 me-3">
              <FaClock className="text-success" size={24} />
            </div>
            <div>
              <h6 className="text-muted mb-1">Active Minutes</h6>
              <h3 className="mb-0">{currentStats.activeMinutes}</h3>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={6} xl={3}>
        <Card className="border-0 shadow-sm h-100">
          <Card.Body className="d-flex align-items-center">
            <div className="rounded-circle p-3 bg-info bg-opacity-10 me-3">
              <FaWater className="text-info" size={24} />
            </div>
            <div>
              <h6 className="text-muted mb-1">Water Intake</h6>
              <h3 className="mb-0">{currentStats.waterIntake}L</h3>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCards; 