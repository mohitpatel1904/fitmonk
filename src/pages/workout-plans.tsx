import { useState } from 'react';
import Layout from '@/components/Layout';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import WorkoutPlanCard from '@/components/workout/WorkoutPlanCard';
import { workoutPlans } from '@/data/workoutPlans';
import { FaSearch, FaDumbbell, FaFire, FaClock, FaUsers, FaArrowRight, FaPlay, FaTrophy, FaHeart } from 'react-icons/fa';

const WorkoutPlans = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPlans = workoutPlans.filter(plan => {
    const matchesLevel = filter === 'all' || plan.level === filter;
    const matchesSearch = plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const levels = [
    { value: 'all', label: 'All Levels', icon: <FaDumbbell /> },
    { value: 'beginner', label: 'Beginner', icon: <FaHeart /> },
    { value: 'intermediate', label: 'Intermediate', icon: <FaFire /> },
    { value: 'advanced', label: 'Advanced', icon: <FaTrophy /> }
  ];

  const featuredWorkouts = [
    {
      title: 'Quick HIIT',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&q=80',
      calories: '250'
    },
    {
      title: 'Core Crusher',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      calories: '150'
    },
    {
      title: 'Upper Body Blast',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1534368420009-621bfab424a8?w=400&q=80',
      calories: '300'
    }
  ];

  return (
    <Layout title="Workout Plans - FitMonk">
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
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(86, 171, 47, 0.15) 0%, rgba(168, 224, 99, 0.1) 100%)',
            borderRadius: '50%',
            top: '-50px',
            right: '10%'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center py-4">
            <span className="badge-gradient mb-3 d-inline-block">
              <FaDumbbell className="me-2" /> WORKOUT PLANS
            </span>
            <h1 className="display-5 fw-bold mb-3">
              Find Your Perfect <span className="text-gradient">Workout</span>
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Choose from our expert-designed workout plans tailored to different fitness levels and goals.
              Start your fitness journey or level up your current routine.
            </p>

            {/* Filters */}
            <Row className="justify-content-center g-3 mb-4">
              <Col md={5} lg={4}>
                <div className="position-relative">
                  <Form.Control
                    placeholder="Search workout plans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '45px',
                      borderRadius: '14px',
                      border: '2px solid #e2e8f0',
                      padding: '14px 18px 14px 45px'
                    }}
                  />
                  <FaSearch
                    className="position-absolute text-muted"
                    style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                </div>
              </Col>
            </Row>

            {/* Level Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {levels.map(level => (
                <button
                  key={level.value}
                  className={`btn px-4 py-2 rounded-pill fw-medium d-flex align-items-center gap-2 ${filter === level.value ? 'btn-primary' : 'btn-light'}`}
                  onClick={() => setFilter(level.value)}
                  style={{
                    transition: 'all 0.3s ease',
                    border: filter === level.value ? 'none' : '1px solid #e2e8f0'
                  }}
                >
                  {level.icon} {level.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Quick Workouts Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)' }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="text-white fw-bold mb-1">⚡ Quick Workouts</h3>
              <p className="text-white mb-0" style={{ opacity: 0.9 }}>Short on time? Try these quick sessions</p>
            </div>
          </div>
          <Row className="g-4">
            {featuredWorkouts.map((workout, index) => (
              <Col md={4} key={index}>
                <Card
                  className="border-0 overflow-hidden h-100"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={workout.image}
                      alt={workout.title}
                      className="w-100"
                      style={{ height: '160px', objectFit: 'cover' }}
                    />
                    <div
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <FaPlay className="text-primary" />
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <h6 className="text-white fw-bold mb-2">{workout.title}</h6>
                    <div className="d-flex gap-3 text-white small" style={{ opacity: 0.9 }}>
                      <span><FaClock className="me-1" /> {workout.duration}</span>
                      <span><FaFire className="me-1" /> {workout.calories} cal</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-4" style={{ background: '#1a1a2e' }}>
        <Container>
          <Row className="text-center">
            {[
              { value: '50+', label: 'Workout Plans', icon: <FaDumbbell /> },
              { value: '200+', label: 'Exercises', icon: <FaFire /> },
              { value: '10k+', label: 'Active Users', icon: <FaUsers /> },
              { value: '500k+', label: 'Workouts Completed', icon: <FaTrophy /> }
            ].map((stat, index) => (
              <Col md={3} sm={6} key={index} className="py-3">
                <div className="text-white">
                  <span className="me-2" style={{ color: '#a8e063' }}>{stat.icon}</span>
                  <span className="h4 fw-bold me-2">{stat.value}</span>
                  <span style={{ opacity: 0.7 }}>{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Workout Plans Grid */}
      <div className="py-5" style={{ background: '#f8fafc' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">All Workout Plans</h2>
            <p className="text-muted">Structured programs for every fitness level</p>
          </div>
          <Row className="g-4">
            {filteredPlans.length > 0 ? (
              filteredPlans.map(plan => (
                <Col key={plan.id} md={6} lg={4}>
                  <WorkoutPlanCard plan={plan} />
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <div
                  className="p-5 rounded-4"
                  style={{ background: 'white' }}
                >
                  <FaDumbbell size={48} className="text-muted mb-3" />
                  <h4 className="fw-bold">No workout plans found</h4>
                  <p className="text-muted">Try changing your search term or filter level.</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>

      {/* Workout Categories Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="badge-gradient mb-3 d-inline-block">CATEGORIES</span>
            <h2 className="fw-bold">Workout by Muscle Group</h2>
            <p className="text-muted">Target specific muscle groups with these effective exercises</p>
          </div>
          <Row className="g-4">
            {[
              {
                name: 'Chest',
                image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
                color: '#ef4444',
                exercises: [
                  { name: 'Bench Press', sets: '4×10' },
                  { name: 'Incline Dumbbell Press', sets: '3×12' },
                  { name: 'Cable Flyes', sets: '3×15' },
                  { name: 'Push-Ups', sets: '3×20' },
                  { name: 'Dumbbell Pullover', sets: '3×12' }
                ]
              },
              {
                name: 'Back',
                image: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=400&q=80',
                color: '#3b82f6',
                exercises: [
                  { name: 'Pull-Ups', sets: '4×8' },
                  { name: 'Bent Over Rows', sets: '4×10' },
                  { name: 'Lat Pulldown', sets: '3×12' },
                  { name: 'Seated Cable Row', sets: '3×12' },
                  { name: 'Deadlift', sets: '4×6' },
                  { name: 'Face Pulls', sets: '3×15' }
                ]
              },
              {
                name: 'Legs',
                image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=400&q=80',
                color: '#22c55e',
                exercises: [
                  { name: 'Barbell Squats', sets: '4×8' },
                  { name: 'Romanian Deadlift', sets: '4×10' },
                  { name: 'Leg Press', sets: '3×12' },
                  { name: 'Walking Lunges', sets: '3×12 each' },
                  { name: 'Leg Curls', sets: '3×12' },
                  { name: 'Calf Raises', sets: '4×15' }
                ]
              },
              {
                name: 'Arms',
                image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
                color: '#f59e0b',
                exercises: [
                  { name: 'Barbell Curls', sets: '4×10' },
                  { name: 'Tricep Pushdowns', sets: '4×12' },
                  { name: 'Hammer Curls', sets: '3×12' },
                  { name: 'Skull Crushers', sets: '3×10' },
                  { name: 'Preacher Curls', sets: '3×12' },
                  { name: 'Tricep Dips', sets: '3×12' }
                ]
              },
              {
                name: 'Shoulders',
                image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=400&q=80',
                color: '#8b5cf6',
                exercises: [
                  { name: 'Overhead Press', sets: '4×8' },
                  { name: 'Lateral Raises', sets: '4×12' },
                  { name: 'Front Raises', sets: '3×12' },
                  { name: 'Reverse Flyes', sets: '3×15' },
                  { name: 'Arnold Press', sets: '3×10' }
                ]
              },
              {
                name: 'Core',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
                color: '#ec4899',
                exercises: [
                  { name: 'Plank', sets: '3×60sec' },
                  { name: 'Russian Twists', sets: '3×20' },
                  { name: 'Hanging Leg Raises', sets: '3×12' },
                  { name: 'Cable Crunches', sets: '3×15' },
                  { name: 'Mountain Climbers', sets: '3×30sec' },
                  { name: 'Dead Bug', sets: '3×10 each' }
                ]
              }
            ].map((category, index) => (
              <Col md={6} lg={4} key={index}>
                <Card
                  className="border-0 overflow-hidden h-100"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-100"
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)' }}
                    />
                    <div className="position-absolute bottom-0 start-0 w-100 p-3">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle"
                          style={{ width: '12px', height: '12px', background: category.color }}
                        />
                        <h5 className="text-white fw-bold mb-0">{category.name}</h5>
                      </div>
                      <small className="text-white" style={{ opacity: 0.8 }}>
                        {category.exercises.length} exercises
                      </small>
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <div className="d-flex flex-column gap-2">
                      {category.exercises.map((exercise, idx) => (
                        <div
                          key={idx}
                          className="d-flex justify-content-between align-items-center p-2 rounded-3"
                          style={{ background: '#f8fafc' }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span
                              className="fw-bold"
                              style={{ color: category.color, fontSize: '0.8rem', width: '20px' }}
                            >
                              {idx + 1}
                            </span>
                            <span className="fw-medium" style={{ fontSize: '0.9rem' }}>
                              {exercise.name}
                            </span>
                          </div>
                          <span
                            className="px-2 py-1 rounded-pill text-white fw-semibold"
                            style={{ background: category.color, fontSize: '0.7rem' }}
                          >
                            {exercise.sets}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-center"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="position-absolute animate-pulse"
          style={{
            width: '300px',
            height: '300px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            top: '-100px',
            left: '-50px'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="fw-bold text-white mb-3">Need a Custom Workout Plan?</h2>
              <p className="text-white mb-4" style={{ opacity: 0.9 }}>
                Get a personalized workout plan designed specifically for your goals, fitness level, and schedule.
              </p>
              <Button
                variant="light"
                size="lg"
                className="px-5 py-3 fw-semibold"
                style={{ borderRadius: '14px' }}
              >
                Get Personalized Plan <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default WorkoutPlans;