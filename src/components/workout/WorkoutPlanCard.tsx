import { useState } from 'react';
import { Card, Badge, Button, Accordion } from 'react-bootstrap';
import { WorkoutPlan } from '@/data/workoutPlans';
import { FaClock, FaFire, FaChevronDown, FaChevronUp, FaPlay, FaDumbbell } from 'react-icons/fa';

interface WorkoutPlanCardProps {
  plan: WorkoutPlan;
}

const WorkoutPlanCard = ({ plan }: WorkoutPlanCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const getLevelStyle = (level: string) => {
    const styles: { [key: string]: { gradient: string; color: string } } = {
      'beginner': { gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', color: '#10b981' },
      'intermediate': { gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)', color: '#f59e0b' },
      'advanced': { gradient: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)', color: '#ef4444' }
    };
    return styles[level] || styles.beginner;
  };

  const style = getLevelStyle(plan.level);

  return (
    <Card
      className="h-100 border-0 overflow-hidden"
      style={{
        borderRadius: '20px',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      {/* Image Header */}
      <div className="position-relative" style={{ overflow: 'hidden' }}>
        <img
          src={plan.image}
          alt={plan.title}
          className="w-100"
          style={{
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Level Badge */}
        <span
          className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill text-white fw-semibold text-capitalize"
          style={{
            background: style.gradient,
            fontSize: '0.75rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
          }}
        >
          {plan.level}
        </span>
        {/* Gradient Overlay */}
        <div
          className="position-absolute bottom-0 start-0 end-0"
          style={{
            height: '80px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
          }}
        />
        {/* Duration on image */}
        <div className="position-absolute bottom-0 start-0 m-3 d-flex gap-3">
          <span className="text-white d-flex align-items-center small">
            <FaClock className="me-1" /> {plan.duration}
          </span>
          <span className="text-white d-flex align-items-center small">
            <FaFire className="me-1" /> {plan.calories} cal
          </span>
        </div>
      </div>

      <Card.Body className="p-4">
        <Card.Title className="fw-bold mb-2">{plan.title}</Card.Title>
        <Card.Text className="text-muted mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          {plan.description}
        </Card.Text>

        {/* Expand Button */}
        <Button
          variant="light"
          className="w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
          onClick={() => setExpanded(!expanded)}
          style={{
            borderRadius: '12px',
            background: '#f1f5f9',
            border: 'none',
            color: '#475569'
          }}
        >
          <FaDumbbell /> {expanded ? 'Hide Details' : 'View Exercises'}
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </Button>

        {/* Expandable Workout Details */}
        {expanded && (
          <Accordion defaultActiveKey="0" className="workout-accordion">
            {plan.workouts.map((workout, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                className="border-0 mb-2"
                style={{ background: '#f8fafc', borderRadius: '12px', overflow: 'hidden' }}
              >
                <Accordion.Header>
                  <span className="fw-semibold">Day {workout.day}: {workout.name}</span>
                </Accordion.Header>
                <Accordion.Body className="pt-2">
                  <ul className="list-unstyled mb-0">
                    {workout.exercises.map((exercise, idx) => (
                      <li
                        key={idx}
                        className="mb-2 pb-2"
                        style={{ borderBottom: idx < workout.exercises.length - 1 ? '1px solid #e2e8f0' : 'none' }}
                      >
                        <div className="fw-medium">{exercise.name}</div>
                        <div className="d-flex gap-3 text-muted small mt-1">
                          {exercise.sets && exercise.reps && (
                            <span>{exercise.sets} sets × {exercise.reps}</span>
                          )}
                          {exercise.rest && exercise.rest !== 'N/A' && (
                            <span>Rest: {exercise.rest}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Card.Body>

      <Card.Footer className="bg-white border-0 px-4 pb-4 pt-0">
        <Button
          variant="primary"
          className="w-100 py-3 d-flex align-items-center justify-content-center gap-2"
          style={{ borderRadius: '12px' }}
        >
          <FaPlay /> Start This Plan
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default WorkoutPlanCard;