import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { UserProfile } from '@/data/mockUserData';

interface UserStatsCardProps {
  user: UserProfile;
}

const UserStatsCard = ({ user }: UserStatsCardProps) => {
  const weightProgress = () => {
    // Calculate weight loss or gain progress (as a percentage)
    const currentWeight = user.weight;
    const startWeight = currentWeight + 7; // Simulating that they started 7kg heavier
    const goalWeight = user.goalWeight;
    
    // Calculate progress percentage differently based on goal type
    if (goalWeight < startWeight) { 
      // Weight loss goal
      const totalToLose = startWeight - goalWeight;
      const lostSoFar = startWeight - currentWeight;
      return Math.min(100, Math.max(0, (lostSoFar / totalToLose) * 100));
    } else { 
      // Weight gain goal
      const totalToGain = goalWeight - startWeight;
      const gainedSoFar = currentWeight - startWeight;
      return Math.min(100, Math.max(0, (gainedSoFar / totalToGain) * 100));
    }
  };

  const progressPercentage = weightProgress();
  const joinDate = new Date(user.joinDate);
  const joinedFormatted = joinDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const goalText = 
    user.fitnessGoal === 'weight-loss' ? 'Weight Loss' :
    user.fitnessGoal === 'muscle-gain' ? 'Muscle Gain' :
    user.fitnessGoal === 'endurance' ? 'Endurance' : 
    'General Fitness';

  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex align-items-center mb-4">
          <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" 
               style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h5 className="mb-0">{user.name}</h5>
            <p className="text-muted mb-0">Member since {joinedFormatted}</p>
          </div>
        </div>
        
        <Row className="g-3 mt-2">
          <Col sm={6}>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Height</span>
                <span>{user.height} cm</span>
              </div>
            </div>
          </Col>
          
          <Col sm={6}>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Current Weight</span>
                <span>{user.weight} kg</span>
              </div>
            </div>
          </Col>

          <Col sm={6}>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Goal Weight</span>
                <span>{user.goalWeight} kg</span>
              </div>
            </div>
          </Col>

          <Col sm={6}>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Fitness Goal</span>
                <span>{goalText}</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-3">
          <div className="d-flex justify-content-between mb-1">
            <span className="text-muted">Progress to Goal Weight</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <ProgressBar now={progressPercentage} variant="primary" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserStatsCard; 