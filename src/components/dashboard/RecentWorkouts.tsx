import { Card, Table, Badge } from 'react-bootstrap';
import { WorkoutLog } from '@/data/mockUserData';

interface RecentWorkoutsProps {
  workouts: WorkoutLog[];
}

const getWorkoutTypeBadge = (type: string) => {
  switch (type.toLowerCase()) {
    case 'strength training':
      return <Badge bg="primary">{type}</Badge>;
    case 'cardio':
      return <Badge bg="success">{type}</Badge>;
    case 'hiit':
      return <Badge bg="danger">{type}</Badge>;
    case 'yoga':
      return <Badge bg="info">{type}</Badge>;
    default:
      return <Badge bg="secondary">{type}</Badge>;
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const RecentWorkouts = ({ workouts }: RecentWorkoutsProps) => {
  return (
    <Card className="border-0 shadow-sm mb-4">
      <Card.Body>
        <Card.Title className="mb-4">Recent Workouts</Card.Title>
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Calories</th>
                <th>Exercises</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout) => (
                <tr key={workout.id}>
                  <td>{formatDate(workout.date)}</td>
                  <td>{getWorkoutTypeBadge(workout.type)}</td>
                  <td>{workout.duration} min</td>
                  <td>{workout.caloriesBurned} kcal</td>
                  <td>{workout.exercises.length} exercises</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecentWorkouts; 