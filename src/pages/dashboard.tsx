import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Container, Row, Col, Button, ButtonGroup, Card } from 'react-bootstrap';
import StatsCards from '@/components/dashboard/StatsCards';
import ActivityChart from '@/components/dashboard/ActivityChart';
import RecentWorkouts from '@/components/dashboard/RecentWorkouts';
import UserStatsCard from '@/components/dashboard/UserStatsCard';
import { userProfile, workoutLogs, dailyStats } from '@/data/mockUserData';
import { FaPlusCircle, FaCalendarAlt, FaChartLine, FaCog } from 'react-icons/fa';

interface User {
  name: string;
  email: string;
  gender: string;
}

const Dashboard = () => {
  const [chartPeriod, setChartPeriod] = useState<'week' | 'month'>('week');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const userStr = localStorage.getItem('currentUser');
      if (!userStr) {
        router.push('/login');
      } else {
        setUser(JSON.parse(userStr));
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const currentStats = dailyStats[0];

  if (loading) {
    return (
      <Layout title="Loading... - FitMonk">
        <div
          className="py-5 min-vh-100 d-flex align-items-center justify-content-center"
          style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' }}
        >
          <div className="text-center">
            <div
              className="spinner-border text-primary mb-3"
              style={{ width: '3rem', height: '3rem' }}
            />
            <h4 className="text-muted">Loading your dashboard...</h4>
          </div>
        </div>
      </Layout>
    );
  }

  const customUserProfile = {
    ...userProfile,
    name: user?.name || userProfile.name,
    email: user?.email || userProfile.email
  };

  const quickLinks = [
    { icon: <FaPlusCircle />, label: 'Add New Workout', color: '#56ab2f' },
    { icon: <FaCalendarAlt />, label: 'View Workout Plans', color: '#667eea' },
    { icon: <FaChartLine />, label: 'View Progress Report', color: '#f093fb' },
    { icon: <FaCog />, label: 'Account Settings', color: '#4facfe' }
  ];

  return (
    <Layout title="Dashboard - FitMonk">
      {/* Header Section */}
      <div
        className="py-4"
        style={{
          background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
          marginBottom: '-50px'
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div>
              <h1 className="mb-1 text-white fw-bold">Welcome back, {user?.name}! 👋</h1>
              <p className="text-white mb-0" style={{ opacity: 0.9 }}>
                Track your progress and stay motivated
              </p>
            </div>
            <Button
              variant="light"
              className="px-4 py-2 fw-semibold"
              style={{ borderRadius: '12px' }}
            >
              <FaPlusCircle className="me-2" /> Log Workout
            </Button>
          </div>
        </Container>
      </div>

      <div className="pb-5" style={{ background: '#f8fafc' }}>
        <Container>
          {/* Stats Cards */}
          <div style={{ paddingTop: '30px' }}>
            <StatsCards currentStats={currentStats} />
          </div>

          <Row className="mt-4">
            <Col lg={8}>
              {/* Activity Chart */}
              <Card className="border-0 mb-4" style={{ borderRadius: '20px' }}>
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0 fw-bold">Progress Overview</h5>
                    <div
                      className="p-1 rounded-3"
                      style={{ background: '#f1f5f9' }}
                    >
                      <Button
                        variant={chartPeriod === 'week' ? 'primary' : 'link'}
                        onClick={() => setChartPeriod('week')}
                        size="sm"
                        className={`px-3 ${chartPeriod !== 'week' ? 'text-muted' : ''}`}
                        style={{ borderRadius: '8px' }}
                      >
                        Week
                      </Button>
                      <Button
                        variant={chartPeriod === 'month' ? 'primary' : 'link'}
                        onClick={() => setChartPeriod('month')}
                        size="sm"
                        className={`px-3 ${chartPeriod !== 'month' ? 'text-muted' : ''}`}
                        style={{ borderRadius: '8px' }}
                      >
                        Month
                      </Button>
                    </div>
                  </div>
                  <ActivityChart stats={dailyStats} period={chartPeriod} />
                </Card.Body>
              </Card>

              {/* Recent Workouts */}
              <RecentWorkouts workouts={workoutLogs} />
            </Col>

            <Col lg={4}>
              {/* User Stats */}
              <UserStatsCard user={customUserProfile} />

              {/* Quick Links */}
              <Card className="border-0 mt-4" style={{ borderRadius: '20px' }}>
                <Card.Body className="p-4">
                  <h5 className="mb-4 fw-bold">Quick Actions</h5>
                  <div className="d-grid gap-3">
                    {quickLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="light"
                        className="text-start d-flex align-items-center py-3 px-3"
                        style={{
                          borderRadius: '12px',
                          background: '#f8fafc',
                          border: 'none'
                        }}
                      >
                        <div
                          className="me-3 p-2 rounded-3"
                          style={{
                            background: `${link.color}15`,
                            color: link.color
                          }}
                        >
                          {link.icon}
                        </div>
                        <span className="fw-medium text-dark">{link.label}</span>
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;